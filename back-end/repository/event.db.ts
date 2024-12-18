import { Category } from "../model/category";
import { Event } from "../model/event";
import { Image } from "../model/image";
import { Ticket } from "../model/ticket";
import { CategoryClass } from "../model/categoryClass";

const image1 = new Image({ path: '/eventImages/summerFestival.jpg', altText: 'Summer Music Festival image' });
const image2 = new Image({ path: '/eventImages/summerFestival2.jpg', altText: 'Summer Music Festival image' });
const image3 = new Image({ path: '/eventImages/techExpo.jpg', altText: 'Tech expo image' });
const image4 = new Image({ path: '/eventImages/art&wine.jpg', altText: 'Art and wine evening image' });
const image5 = new Image({ path: '/eventImages/fashionShow.jpg', altText: 'Fashion Show image' });
const image6 = new Image({ path: '/eventImages/foodFestival.jpg', altText: 'Food Festival image' });
const image13 = new Image({ path: '/eventImages/foodFestival2.jpg', altText: 'Food Festival image' });
const image7 = new Image({ path: '/eventImages/charityRun.jpg', altText: 'Charity Run event image' });
const image8 = new Image({ path: '/eventImages/comedyNight.jpg', altText: 'Comedy Night image' });
const image9 = new Image({ path: '/eventImages/filmFestival.jpg', altText: 'Film Festival image' });
const image10 = new Image({ path: '/eventImages/jazzNight.jpg', altText: 'Jazz Night image' });
const image11 = new Image({ path: '/eventImages/christmasMarket.jpg', altText: 'Christmas Market image' });
const image12 = new Image({ path: '/eventImages/christmasMarket2.jpg', altText: 'Christmas Market image' });
const image14 = new Image({ path: '/eventImages/gravelRide.jpg', altText: 'Gravel ride image' });

const category1 = new CategoryClass({ name: Category.Festival });
const category2 = new CategoryClass({ name: Category.Music });
const category3 = new CategoryClass({ name: Category.Expo });
const category4 = new CategoryClass({ name: Category.Art });
const category5 = new CategoryClass({ name: Category.Night });
const category6 = new CategoryClass({ name: Category.Sport });
const category7 = new CategoryClass({ name: Category.Fashion });
const category8 = new CategoryClass({ name: Category.Stage });
const category9 = new CategoryClass({ name: Category.Food });
const category10 = new CategoryClass({ name: Category.Film });
const category11 = new CategoryClass({ name: Category.Summer });
const category12 = new CategoryClass({ name: Category.Winter });
const category13 = new CategoryClass({ name: Category.Day });
const category14 = new CategoryClass({ name: Category.Technology });


const ticket1 = new Ticket({ticketType:'standard', price: 50})
const ticket2 = new Ticket({ticketType:'premium', price: 70})
const ticket3 = new Ticket({ticketType:'participation fee', price: 20})
const ticket4 = new Ticket({ticketType:'participation fee', price: 10})
const ticket5 = new Ticket({ticketType:'standard', price: 30})
const ticket6 = new Ticket({ticketType:'entrance', price: 5})

const events: Event[] = [
    new Event({
        id: 1,
        name: 'Summer Music Festival',
        date: '2025-06-15',
        startTime: '18:00', 
        endTime: '00:00',
        location: 'Brussels, Belgium',
        capacity: 5000,
        ticketsSold: 3200,
        summary: 'A vibrant music festival with live performances from top artists.',
        description: 'The Summer Music Festival is a must-attend event for music lovers of all genres. Set in the heart of Brussels, this open-air festival features a line-up of renowned international and local artists performing across multiple stages. From electrifying pop hits to soulful acoustic sets, there is something for everyone. Attendees can also enjoy a variety of food and drink stalls, interactive art installations, and merchandise booths. The festival creates a lively atmosphere, bringing together people from all walks of life to celebrate the universal language of music.',
        categories: [category1, category11, category2, category8, category5],
        images: [image1, image2],
        tickets: [ticket1, ticket2]
    }),
    new Event({
        id: 2,
        name: 'Tech Expo 2024',
        date: '2025-01-10',
        startTime: '09:00', 
        endTime: '17:00',
        location: 'Antwerp, Belgium',
        capacity: 2000,
        ticketsSold: 1500,
        summary: 'An expo showcasing the latest in technology and innovation.',
        description: 'Tech Expo 2024 is the ultimate destination for tech enthusiasts, innovators, and businesses looking to stay ahead in the digital age. Hosted in Antwerp, the expo features keynote speeches from industry leaders, hands-on workshops, and interactive exhibits. Attendees can explore cutting-edge gadgets, revolutionary software solutions, and sustainable technology trends. The event also provides excellent networking opportunities, connecting startups with potential investors and collaborators. From AI and robotics to renewable energy tech, Tech Expo 2024 promises to inspire and inform.',
        categories: [category13, category14, category3],
        images: [image3],
        tickets: [ticket5]
    }),
    new Event({
        id: 3,
        name: 'Art & Wine Evening',
        date: '2024-12-06',
        startTime: '19:00', 
        endTime: '22:00',
        location: 'Ghent, Belgium',
        capacity: 30,
        ticketsSold: 15,
        summary: 'An intimate evening of art and wine tasting.',
        description: 'Art & Wine Evening is a sophisticated gathering for art and wine aficionados. Held in a charming gallery in Ghent, the event offers attendees the chance to view an exclusive collection of contemporary and classic artworks. Expert sommeliers curate a selection of fine wines, each paired with delicious hors d’oeuvres. Guests can mingle with artists, learn about the creative process, and indulge their senses in a relaxed, elegant atmosphere. It’s the perfect night for those seeking cultural enrichment and culinary delight.',
        categories: [category4, category9, category12, category5],
        images: [image4],
        tickets: [ticket4] 
    }),
    new Event({
        id: 4,
        name: 'Fashion Show 2025',
        date: '2025-03-20',
        startTime: '18:30', 
        endTime: '22:00',
        location: 'Brussels, Belgium',
        capacity: 1500,
        ticketsSold: 1200,
        summary: 'The most awaited fashion show of the year, featuring top designers and new trends.',
        description: 'Fashion Show 2025 brings the glamour and excitement of haute couture to Brussels. Featuring a runway adorned with cutting-edge designs from world-renowned fashion houses, this event celebrates creativity and innovation in the fashion industry. Guests will have the opportunity to witness the debut of new seasonal collections, interact with designers, and gain insight into upcoming trends. With live music, a vibrant crowd, and a luxurious ambiance, Fashion Show 2025 is an unmissable experience for fashion enthusiasts and industry professionals alike.',
        categories: [category7, category8, category5],
        images: [image5],
        tickets: [ticket1] 
    }),
    new Event({
        id: 5,
        name: 'International Food Festival',
        date: '2025-05-10',
        startTime: '11:00', 
        endTime: '23:00',
        location: 'Liege, Belgium',
        capacity: 2000,
        ticketsSold: 1500,
        summary: 'A celebration of culinary delights from around the world with food stalls and live music.',
        description: 'The International Food Festival in Liege is a vibrant celebration of global cuisine and culture. With food stalls representing over 50 countries, attendees can sample dishes ranging from spicy street food to gourmet delicacies. Live music performances, cultural dance shows, and cooking demonstrations add to the festive atmosphere. Families, friends, and foodies will find plenty to enjoy as they explore the flavors of the world. Don’t miss this opportunity to experience the richness of international cuisine in one lively location.',
        categories: [category13, category9, category5],
        images: [image6, image13],
        tickets: []
    }),
    new Event({
        id: 6,
        name: 'Charity Run 2024',
        date: '2025-04-22',
        startTime: '07:00', 
        endTime: '12:00',
        location: 'Brussels, Belgium',
        capacity: 500,
        ticketsSold: 450,
        summary: 'Run for a cause in the annual charity event to support local organizations.',
        description: 'Charity Run 2024 is more than just a race – it’s a chance to make a difference. Participants will traverse a scenic route through Brussels, with distances suited for all fitness levels. The event raises funds for local charitable organizations, supporting education, healthcare, and community development. Families and teams are encouraged to join, and there are prizes for top finishers. With a lively start and finish area featuring music, food, and activities, the Charity Run is a meaningful and memorable experience.',
        categories: [category13, category6],
        images: [image7],
        tickets: [ticket3] 
    }),
    new Event({
        id: 7,
        name: 'Comedy Night with Stand-Up Stars',
        date: '2025-04-15',
        startTime: '20:00', 
        endTime: '22:30',
        location: 'Antwerp, Belgium',
        capacity: 100,
        ticketsSold: 60,
        summary: 'A night filled with laughter featuring the best stand-up comedians.',
        description: 'Get ready to laugh until your sides hurt at Comedy Night with Stand-Up Stars. This intimate event in Antwerp features a stellar line-up of comedians known for their sharp wit and hilarious routines. From observational humor to clever storytelling, the evening promises a diverse range of comedic styles. Enjoy a relaxed setting with food and drinks available, and prepare for an unforgettable night of laughter and fun.',
        categories: [category5, category8],
        images: [image8]
    }),
    new Event({
        id: 8,
        name: 'Film Festival 2025',
        date: '2025-02-05',
        startTime: '10:00', 
        endTime: '23:00',
        location: 'Bruges, Belgium',
        capacity: 500,
        ticketsSold: 320,
        summary: 'Showcasing independent films, documentaries, and shorts from filmmakers around the world.',
        description: 'Film Festival 2025 in Bruges is a cinematic paradise for film lovers. Over the course of the day, attendees can watch a curated selection of independent films, thought-provoking documentaries, and innovative shorts. Panel discussions with filmmakers, workshops, and networking events provide deeper insights into the art of filmmaking. Whether you’re a casual viewer or an industry professional, the festival offers an enriching and inspiring experience.',
        categories: [category1, category10, category13, category5],
        images: [image9],
        tickets: [ticket1, ticket2]
    }),
    new Event({
        id: 9,
        name: 'Jazz Night Live',
        date: '2025-09-18',
        startTime: '19:30', 
        endTime: '23:00',
        location: 'Ghent, Belgium',
        capacity: 50,
        ticketsSold: 45,
        summary: 'Enjoy a night of smooth jazz performances by top local and international artists.',
        description: 'Jazz Night Live in Ghent is a celebration of timeless music and extraordinary talent. The event features performances by acclaimed jazz artists, showcasing a variety of styles from classic to contemporary. Set in an intimate venue, the evening offers a relaxed and sophisticated ambiance. Guests can enjoy delicious drinks and snacks while immersing themselves in the soulful melodies and masterful improvisations that define jazz.',
        categories: [category2, category5, category8,],
        images: [image10],
        tickets: [ticket6]
    }),
    new Event({
        id: 10,
        name: 'Belgium Gravel Ride 2025', 
        date: '2025-04-12',  
        startTime: '07:00', 
        endTime: '16:00',
        location: 'Ardennes, Belgium',  
        capacity: 500,
        ticketsSold: 150,
        summary: 'A thrilling gravel ride through the scenic countryside of Belgium. Ride through beautiful trails and challenge yourself.',
        description: 'Belgium Gravel Ride 2025 invites cycling enthusiasts to experience an exhilarating adventure through the picturesque Ardennes. The event offers a challenging course that weaves through lush forests, rolling hills, and charming villages. Participants can expect well-marked trails, aid stations, and breathtaking views along the way. Designed for both seasoned cyclists and newcomers, this event emphasizes camaraderie and the joy of outdoor exploration. Join us for a day of endurance, scenic beauty, and shared passion for gravel biking.',
        categories: [category6, category13],
        images: [image14],
        tickets: [ticket3]   
    }),

    new Event({
        id: 11,
        name: 'Christmas Market 2024 Opening',
        date: '2024-12-10',
        startTime: '10:00', 
        endTime: '20:00',
        location: 'Brussels, Belgium',
        capacity: 1000,
        ticketsSold: 900,
        summary: 'A traditional Christmas market with food, gifts, and live performances.',
        description: 'Celebrate the festive season at the opening of the Christmas Market 2024 in Brussels. This iconic event transforms the city into a winter wonderland, featuring dozens of stalls offering handmade crafts, holiday decorations, and gourmet treats. Visitors can enjoy live performances, including carol singing and theatrical acts, as they stroll through the beautifully lit market. With an ice-skating rink, delicious seasonal food, and a cheerful atmosphere, this event is perfect for families and friends looking to immerse themselves in holiday spirit.',
        categories: [category1, category12, category13, category5],
        images: [image11, image12]
    })
];



const getAllEvents = (): Event[] => events;

const getEventById = ({ id }: { id: number }): Event | null => {
    return events.find(event => event.getId() === id) || null;
}

const addEvent = (event: Event): Event => {
    events.push(event);
    return event;
}

export default {
    getAllEvents,
    getEventById,
    addEvent
};
