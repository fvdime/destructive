import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const awsS3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION as string,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY as string,
  }
});

const ACCEPTED_CONTENT_TYPES = ["png", "gif", "svg", "jpg", "jpeg"];

const uploadImage = async function ({
  fileName,
  file,
  fileContent,
  bucketName,
}: {
  fileName?: string;
  file: File | FormDataEntryValue;
  fileContent?: string;
  bucketName?: string;
}) {
  if (!file || !(file instanceof File)) {
    return null;
  }
  if (!fileName) fileName = file.name;
  if (!bucketName) bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  if (!fileContent) {
    const fileContentArray = fileName.split(".");
    fileContent = fileContentArray[fileContentArray.length - 1];
  }
  if (!ACCEPTED_CONTENT_TYPES.some((item) => item == fileContent)) return null;
  fileName = uuidv4() + fileName;
  fileName = fileName.replace(/\s/g, "");
  const fileBody: ArrayBuffer = await file.arrayBuffer();
  const result = await awsS3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: Buffer.from(fileBody),
      ContentType: `image/${fileContent}`,
    })
  );

  console.log(result, fileName)
  return {
    result: result,
    filePath: fileName,
  };
};

export default uploadImage;