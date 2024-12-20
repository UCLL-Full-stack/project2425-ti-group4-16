import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { set } from 'date-fns';

const prisma = new PrismaClient();

const main = async () => {
    // Clear the database
    await prisma.event.deleteMany();
    await prisma.categoryClass.deleteMany();
    await prisma.image.deleteMany();
    await prisma.ticket.deleteMany();

    // Create Categories
    const categoryFestival = await prisma.categoryClass.create({
        data: { name: 'Festival' },
    });
    const categoryMusic = await prisma.categoryClass.create({
        data: { name: 'Music' },
    });
    const categoryExpo = await prisma.categoryClass.create({
        data: { name: 'Expo' },
    });
    const categoryArt = await prisma.categoryClass.create({
        data: { name: 'Art' },
    });
    const categoryNight = await prisma.categoryClass.create({
        data: { name: 'Night' },
    });
    const categorySport = await prisma.categoryClass.create({
        data: { name: 'Sport' },
    });
    const categoryFashion = await prisma.categoryClass.create({
        data: { name: 'Fashion' },
    });
    const categoryStage = await prisma.categoryClass.create({
        data: { name: 'Stage' },
    });
    const categoryFood = await prisma.categoryClass.create({
        data: { name: 'Food' },
    });
    const categoryFilm = await prisma.categoryClass.create({
        data: { name: 'Film' },
    });
    const categorySummer = await prisma.categoryClass.create({
        data: { name: 'Summer' },
    });
    const categoryWinter = await prisma.categoryClass.create({
        data: { name: 'Winter' },
    });
    const categoryDay = await prisma.categoryClass.create({
        data: { name: 'Day' },
    });
    const categoryTechnology = await prisma.categoryClass.create({
        data: { name: 'Technology' },
    });

    // Create Images
    const image1 = await prisma.image.create({
        data: { path: '/eventImages/summerFestival.jpg', altText: 'Summer Music Festival image' },
    });
    const image2 = await prisma.image.create({
        data: { path: '/eventImages/summerFestival2.jpg', altText: 'Summer Music Festival image' },
    });
    const image3 = await prisma.image.create({
        data: { path: '/eventImages/techExpo.jpg', altText: 'Tech expo image' },
    });
    const image4 = await prisma.image.create({
        data: { path: '/eventImages/art&wine.jpg', altText: 'Art and wine evening image' },
    });
    const image5 = await prisma.image.create({
        data: { path: '/eventImages/fashionShow.jpg', altText: 'Fashion Show image' },
    });
    const image6 = await prisma.image.create({
        data: { path: '/eventImages/foodFestival.jpg', altText: 'Food Festival image' },
    });
    const image13 = await prisma.image.create({
        data: { path: '/eventImages/foodFestival2.jpg', altText: 'Food Festival image' },
    });
    const image7 = await prisma.image.create({
        data: { path: '/eventImages/charityRun.jpg', altText: 'Charity Run event image' },
    });
    const image8 = await prisma.image.create({
        data: { path: '/eventImages/comedyNight.jpg', altText: 'Comedy Night image' },
    });
    const image9 = await prisma.image.create({
        data: { path: '/eventImages/filmFestival.jpg', altText: 'Film Festival image' },
    });
    const image10 = await prisma.image.create({
        data: { path: '/eventImages/jazzNight.jpg', altText: 'Jazz Night image' },
    });
    const image11 = await prisma.image.create({
        data: { path: '/eventImages/christmasMarket.jpg', altText: 'Christmas Market image' },
    });
    const image12 = await prisma.image.create({
        data: { path: '/eventImages/christmasMarket2.jpg', altText: 'Christmas Market image' },
    });
    const image14 = await prisma.image.create({
        data: { path: '/eventImages/gravelRide.jpg', altText: 'Gravel ride image' },
    });

    // Create Tickets
    const summerFestivalStandard = await prisma.ticketType.create({
        data: { name: 'Summer Festival Standard Ticket', price: 50 },
    });
    const summerFestivalPremium = await prisma.ticketType.create({
        data: { name: 'Summer Festival Premium Ticket', price: 70 },
    });
    const charityRunTicket = await prisma.ticketType.create({
        data: { name: 'Charity Run participation fee', price: 20 },
    });
    const freeEntrance = await prisma.ticketType.create({
        data: { name: 'Free entrance', price: 0 },
    });
    const freeEntry = await prisma.ticketType.create({
        data: { name: 'Free entry', price: 0 },
    });
    const techExpoEntry = await prisma.ticketType.create({
        data: { name: 'Tech expo entry fee', price: 30 },
    });
    const  artWineEveningTicket= await prisma.ticketType.create({
        data: { name: 'Ticket for the event', price: 9 },
    });
    const fashionShowStandard = await prisma.ticketType.create({
        data: { name: 'Fashion Show Standard ticket', price: 40 },
    });
    const  fashionShowVip= await prisma.ticketType.create({
        data: { name: 'Fashion Show VIP ticket', price: 65 },
    });
    const comedyNightStandard = await prisma.ticketType.create({
        data: { name: 'Comedy Night Standard ticket', price: 7 },
    });
    const  comedyNightWithDrink= await prisma.ticketType.create({
        data: { name: 'Comedy Night ticket with all you can drink', price: 20 },
    });
    const filmFestivalDay = await prisma.ticketType.create({
        data: { name: 'Film Festival Day ticket', price: 40 },
    });
    const  filmFestivalNight= await prisma.ticketType.create({
        data: { name: 'Film Festival Night ticket', price: 65 },
    });

    const jazzNightStandard = await prisma.ticketType.create({
        data: { name: 'Jazz Night Standard ticket', price: 5 },
    });
    const  jazzNightStandardWithDrink= await prisma.ticketType.create({
        data: { name: 'Jazz Night ticket with drink', price: 18 },
    });
    const  jazzNightStandardWithFood= await prisma.ticketType.create({
        data: { name: 'Jazz Night ticket with snacks and drink', price: 30 },
    });

    const gravelTicket = await prisma.ticketType.create({
        data: { name: 'Gravel participation ticket', price: 30 },
    });

    // Create Events
    const summerMusicFestival = await prisma.event.create({
        data: {
            name: 'Summer Music Festival',
            date: '2025-06-15',
            startTime: '18:00',
            endTime: '00:00',
            location: 'Brussels, Belgium',
            capacity: 5000,
            ticketsSold: 3200,
            summary: 'A vibrant music festival with live performances from top artists.',
            description: 'The Summer Music Festival is a must-attend event for music lovers of all genres. Set in the heart of Brussels, this open-air festival features a line-up of renowned international and local artists performing across multiple stages. From electrifying pop hits to soulful acoustic sets, there is something for everyone. Attendees can also enjoy a variety of food and drink stalls, interactive art installations, and merchandise booths. The festival creates a lively atmosphere, bringing together people from all walks of life to celebrate the universal language of music.',
            categories: {
                connect: [
                    { id: categoryFestival.id },
                    { id: categorySummer.id },
                    { id: categoryMusic.id },
                    { id: categoryStage.id },
                    { id: categoryNight.id }
                ],
            },
            images: {
                connect: [{ id: image1.id }, { id: image2.id }],
            },
            ticketTypes: {
                connect: [
                    { id: summerFestivalStandard.id },
                    { id: summerFestivalPremium.id }
                ],
            },
            tickets: {
                connect: [],
            },
        },
    });
    
    const techExpo2024 = await prisma.event.create({
        data: {
            name: 'Tech Expo 2024',
            date: '2025-01-10',
            startTime: '09:00',
            endTime: '17:00',
            location: 'Antwerp, Belgium',
            capacity: 2000,
            ticketsSold: 1500,
            summary: 'An expo showcasing the latest in technology and innovation.',
            description: 'Tech Expo 2024 is the ultimate destination for tech enthusiasts, innovators, and businesses looking to stay ahead in the digital age. Hosted in Antwerp, the expo features keynote speeches from industry leaders, hands-on workshops, and interactive exhibits. Attendees can explore cutting-edge gadgets, revolutionary software solutions, and sustainable technology trends. The event also provides excellent networking opportunities, connecting startups with potential investors and collaborators. From AI and robotics to renewable energy tech, Tech Expo 2024 promises to inspire and inform.',
            categories: {
                connect: [
                    { id: categoryDay.id },
                    { id: categoryTechnology.id },
                    { id: categoryExpo.id }
                ],
            },
            images: {
                connect: [{ id: image3.id }],
            },
            ticketTypes: {
                connect: [{ id: techExpoEntry.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });
    
    const artWineEvening = await prisma.event.create({
        data: {
            name: 'Art & Wine Evening',
            date: '2024-12-06',
            startTime: '19:00',
            endTime: '22:00',
            location: 'Ghent, Belgium',
            capacity: 30,
            ticketsSold: 15,
            summary: 'An intimate evening of art and wine tasting.',
            description: 'Art & Wine Evening is a sophisticated gathering for art and wine aficionados. Held in a charming gallery in Ghent, the event offers attendees the chance to view an exclusive collection of contemporary and classic artworks. Expert sommeliers curate a selection of fine wines, each paired with delicious hors d’oeuvres. Guests can mingle with artists, learn about the creative process, and indulge their senses in a relaxed, elegant atmosphere. It’s the perfect night for those seeking cultural enrichment and culinary delight.',
            categories: {
                connect: [
                    { id: categoryArt.id },
                    { id: categoryFood.id },
                    { id: categoryWinter.id },
                    { id: categoryNight.id }
                ],
            },
            images: {
                connect: [{ id: image4.id }],
            },
            ticketTypes: {
                connect: [{ id: artWineEveningTicket.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const fashionShow2025 = await prisma.event.create({
        data: {
            name: 'Fashion Show 2025',
            date: '2025-03-20',
            startTime: '18:30',
            endTime: '22:00',
            location: 'Brussels, Belgium',
            capacity: 1500,
            ticketsSold: 1200,
            summary: 'The most awaited fashion show of the year, featuring top designers and new trends.',
            description: 'Fashion Show 2025 brings the glamour and excitement of haute couture to Brussels. Featuring a runway adorned with cutting-edge designs from world-renowned fashion houses, this event celebrates creativity and innovation in the fashion industry. Guests will have the opportunity to witness the debut of new seasonal collections, interact with designers, and gain insight into upcoming trends. With live music, a vibrant crowd, and a luxurious ambiance, Fashion Show 2025 is an unmissable experience for fashion enthusiasts and industry professionals alike.',
            categories: {
                connect: [{ id: categoryFashion.id }, { id: categoryFashion.id }, { id: categoryFashion.id }],
            },
            images: {
                connect: [{ id: image5.id }],
            },
            ticketTypes: {
                connect: [{ id: fashionShowStandard.id }, { id: fashionShowVip.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const foodFestival = await prisma.event.create({
        data: {
            name: 'International Food Festival',
            date: '2025-05-10',
            startTime: '11:00',
            endTime: '23:00',
            location: 'Liege, Belgium',
            capacity: 2000,
            ticketsSold: 1500,
            summary: 'A celebration of culinary delights from around the world with food stalls and live music.',
            description: 'The International Food Festival in Liege is a vibrant celebration of global cuisine and culture. With food stalls representing over 50 countries, attendees can sample dishes ranging from spicy street food to gourmet delicacies. Live music performances, cultural dance shows, and cooking demonstrations add to the festive atmosphere. Families, friends, and foodies will find plenty to enjoy as they explore the flavors of the world. Don’t miss this opportunity to experience the richness of international cuisine in one lively location.',
            categories: {
                connect: [
                    { id: categoryDay.id },
                    { id: categoryFood.id },
                    { id: categoryNight.id },
                ],
            },
            images: {
                connect: [{ id: image6.id }, { id: image13.id }],
            },
            ticketTypes: {
                connect: [{ id: freeEntrance.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const charityRun2024 = await prisma.event.create({
        data: {
            name: 'Charity Run 2024',
            date: '2025-04-22',
            startTime: '07:00',
            endTime: '12:00',
            location: 'Brussels, Belgium',
            capacity: 500,
            ticketsSold: 450,
            summary: 'Run for a cause in the annual charity event to support local organizations.',
            description: 'Charity Run 2024 is more than just a race – it’s a chance to make a difference. Participants will traverse a scenic route through Brussels, with distances suited for all fitness levels. The event raises funds for local charitable organizations, supporting education, healthcare, and community development. Families and teams are encouraged to join, and there are prizes for top finishers. With a lively start and finish area featuring music, food, and activities, the Charity Run is a meaningful and memorable experience.',
            categories: {
                connect: [{ id: categoryDay.id }, { id: categorySport.id }],
            },
            images: {
                connect: [{ id: image7.id }],
            },
            ticketTypes: {
                connect: [{ id: charityRunTicket.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const comedyNight = await prisma.event.create({
        data: {
            name: 'Comedy Night with Stand-Up Stars',
            date: '2025-04-15',
            startTime: '20:00',
            endTime: '22:30',
            location: 'Antwerp, Belgium',
            capacity: 100,
            ticketsSold: 60,
            summary: 'A night filled with laughter featuring the best stand-up comedians.',
            description: 'Get ready to laugh until your sides hurt at Comedy Night with Stand-Up Stars. This intimate event in Antwerp features a stellar line-up of comedians known for their sharp wit and hilarious routines. From observational humor to clever storytelling, the evening promises a diverse range of comedic styles. Enjoy a relaxed setting with food and drinks available, and prepare for an unforgettable night of laughter and fun.',
            categories: {
                connect: [{ id: categoryNight.id }, { id: categoryStage.id }],
            },
            images: {
                connect: [{ id: image8.id }],
            },
            ticketTypes: {
                connect: [
                    { id: comedyNightStandard.id },
                    { id: comedyNightWithDrink.id },
                ],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const filmFestival2025 = await prisma.event.create({
        data: {
            name: 'Film Festival 2025',
            date: '2025-02-05',
            startTime: '10:00',
            endTime: '23:00',
            location: 'Bruges, Belgium',
            capacity: 500,
            ticketsSold: 320,
            summary: 'Showcasing independent films, documentaries, and shorts from filmmakers around the world.',
            description: 'Film Festival 2025 in Bruges is a cinematic paradise for film lovers. Over the course of the day, attendees can watch a curated selection of independent films, thought-provoking documentaries, and innovative shorts. Panel discussions with filmmakers, workshops, and networking events provide deeper insights into the art of filmmaking. Whether you’re a casual viewer or an industry professional, the festival offers an enriching and inspiring experience.',
            categories: {
                connect: [
                    { id: categoryFestival.id },
                    { id: categoryFilm.id },
                    { id: categoryDay.id },
                    { id: categoryNight.id },
                ],
            },
            images: {
                connect: [{ id: image9.id }],
            },
            ticketTypes: {
                connect: [
                    { id: filmFestivalDay.id },
                    { id: filmFestivalNight.id },
                ],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const jazzNightLive = await prisma.event.create({
        data: {
            name: 'Jazz Night Live',
            date: '2025-09-18',
            startTime: '19:30',
            endTime: '23:00',
            location: 'Ghent, Belgium',
            capacity: 50,
            ticketsSold: 45,
            summary: 'Enjoy a night of smooth jazz performances by top local and international artists.',
            description: 'Jazz Night Live in Ghent is a celebration of timeless music and extraordinary talent. The event features performances by acclaimed jazz artists, showcasing a variety of styles from classic to contemporary. Set in an intimate venue, the evening offers a relaxed and sophisticated ambiance. Guests can enjoy delicious drinks and snacks while immersing themselves in the soulful melodies and masterful improvisations that define jazz.',
            categories: {
                connect: [
                    { id: categoryNight.id },
                    { id: categoryMusic.id },
                    { id: categoryStage.id },
                ],
            },
            images: {
                connect: [{ id: image10.id }],
            },
            ticketTypes: {
                connect: [
                    { id: jazzNightStandard.id },
                    { id: jazzNightStandardWithDrink.id },
                    { id: jazzNightStandardWithFood.id },
                ],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const belgiumGravelRide2025 = await prisma.event.create({
        data: {
            name: 'Belgium Gravel Ride 2025',
            date: '2025-04-12',
            startTime: '07:00',
            endTime: '16:00',
            location: 'Ardennes, Belgium',
            capacity: 500,
            ticketsSold: 150,
            summary: 'A thrilling gravel ride through the scenic countryside of Belgium. Ride through beautiful trails and challenge yourself.',
            description: 'Belgium Gravel Ride 2025 invites cycling enthusiasts to experience an exhilarating adventure through the picturesque Ardennes. The event offers a challenging course that weaves through lush forests, rolling hills, and charming villages. Participants can expect well-marked trails, aid stations, and breathtaking views along the way. Designed for both seasoned cyclists and newcomers, this event emphasizes camaraderie and the joy of outdoor exploration. Join us for a day of endurance, scenic beauty, and shared passion for gravel biking.',
            categories: {
                connect: [{ id: categorySport.id }, { id: categoryDay.id }],
            },
            images: {
                connect: [{ id: image14.id }],
            },
            ticketTypes: {
                connect: [{ id: gravelTicket.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const christmasMarket2024Opening = await prisma.event.create({
        data: {
            name: 'Christmas Market 2024 Opening',
            date: '2024-12-10',
            startTime: '10:00',
            endTime: '20:00',
            location: 'Brussels, Belgium',
            capacity: 1000,
            ticketsSold: 900,
            summary: 'A traditional Christmas market with food, gifts, and live performances.',
            description: 'Celebrate the festive season at the opening of the Christmas Market 2024 in Brussels. This iconic event transforms the city into a winter wonderland, featuring dozens of stalls offering handmade crafts, holiday decorations, and gourmet treats. Visitors can enjoy live performances, including carol singing and theatrical acts, as they stroll through the beautifully lit market. With an ice-skating rink, delicious seasonal food, and a cheerful atmosphere, this event is perfect for families and friends looking to immerse themselves in holiday spirit.',
            categories: {
                connect: [
                    { id: categoryWinter.id },
                    { id: categoryDay.id },
                    { id: categoryNight.id },
                    { id: categoryFood.id },
                ],
            },
            images: {
                connect: [{ id: image11.id }, { id: image12.id }],
            },
            ticketTypes: {
                connect: [{ id: freeEntry.id }],
            },
            tickets: {
                connect: [],
            },
        },
    });

    const aliceAdmin = await prisma.user.create({
        data: {
            username: 'admin1',
            password: await bcrypt.hash('adminPass', 12),
            role: 'ADMIN',
            profile: {
                create: {
                    firstName: 'Alice',
                    lastName: 'Anderson',
                    email: 'alice.admin@example.com',
                    phoneNumber: '123-456-7890',
                    birthDate: '1985-06-12',
                },
            },
        },
    });
    
    const bobUser = await prisma.user.create({
        data: {
            username: 'user1',
            password: await bcrypt.hash('userPass', 12),
            role: 'USER',
            profile: {
                create: {
                    firstName: 'Bob',
                    lastName: 'Brown',
                    email: 'bob.user@example.com',
                    phoneNumber: '987-654-3210',
                    birthDate: '1990-01-20',
                },
            },
        },
    });
    
    const carolAdmin = await prisma.user.create({
        data: {
            username: 'admin',
            password: await bcrypt.hash('adminnn', 12),
            role: 'ADMIN',
            profile: {
                create: {
                    firstName: 'Carol',
                    lastName: 'Clark',
                    email: 'carol.user@example.com',
                    phoneNumber: '555-555-5555',
                    birthDate: '1992-03-15',
                },
            },
        },
    });
    
    const davidGuest = await prisma.user.create({
        data: {
            username: 'guest1',
            password: await bcrypt.hash('gestpass', 12),
            role: 'USER' ,
            profile: {
                create: {
                    firstName: 'David',
                    lastName: 'Doe',
                    email: 'david.guest@example.com',
                    phoneNumber: '444-444-4444',
                    birthDate: '1995-07-22',
                },
            },
        },
    });
    
    
};

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
