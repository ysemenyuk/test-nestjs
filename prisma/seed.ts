import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();

  console.log('Seeding...');

  //   const camera1 = await prisma.camera.create({
  //     data: {
  //       name: 'camera-1',
  //       description: 'description-camera-1',
  //       userId: 2,
  //     },
  //   });

  //   const camera2 = await prisma.camera.create({
  //     data: {
  //       name: 'camera-2',
  //       description: 'description-camera-2',
  //       userId: 2,
  //     },
  //   });

  //   console.log({ camera1, camera2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
