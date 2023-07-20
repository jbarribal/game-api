import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()


const libraryStatuses = ['Wishlist', 'Owned', 'NowPlaying', 'Completed'];


const generateRandomDate = () => {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 10);
  const endDate = new Date();
  return faker.date.between({startDate, endDate});
};


const generateRandomPlatforms = () => {
  const platforms = ['PC', 'Xbox', 'PlayStation', 'Nintendo Switch'];
  const randomPlatforms = faker.helpers.arrayElements(platforms, faker.number.int({ min: 1, max: platforms.length }));
  return randomPlatforms;
};


const generateRandomTags = () => {
  const tags = ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy', 'Sports', 'Horror', 'Puzzle', 'Multiplayer'];
  const randomTags = faker.helpers.arrayElements(tags, faker.number.int({ min: 1, max: tags.length }));
  return randomTags;
};


const generateRandomLibraryStatus = () => faker.helpers.arrayElement(libraryStatuses);


const generateRandomRating = () => faker.number.int({ min: 1, max: 10 });


async function main() {
    try {
        
        const games = Array.from({ length: 10 }).map(() => ({
          title: faker.word.words(faker.number.int({ min: 1, max: 3 })), 
          platforms: generateRandomPlatforms(),
          releaseDate: generateRandomDate(),
          libraryStatus: generateRandomLibraryStatus(),
          Rating: generateRandomRating(),
          tags: generateRandomTags(),
        }));
    
        
        await prisma.game.createMany({ data: games });
    
        console.log('Database seeded successfully.');
      } catch (error) {
        console.error('Error seeding the database:', error);
      } finally {
        
        await prisma.$disconnect();
      }

}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
