const sampleBooks = [
    {
        id: "1",
        title: "The Great Gatsby",
        rating: 5,
        status: "Read",
        notes: "A classic tale of the American Dream and its disillusionment. F. Scott Fitzgerald's prose is exquisite.",
        dateAdded: "2023-01-15T10:00:00.000Z"
    },
    {
        id: "2",
        title: "To Kill a Mockingbird",
        rating: 4,
        status: "Read",
        notes: "Harper Lee's powerful story about racism and innocence in the American South. Atticus Finch is an unforgettable character.",
        dateAdded: "2023-02-20T14:30:00.000Z"
    },
    {
        id: "3",
        title: "1984",
        rating: 5,
        status: "Reading",
        notes: "George Orwell's dystopian masterpiece. The concepts of Big Brother and surveillance are eerily relevant today.",
        dateAdded: "2023-03-10T09:15:00.000Z"
    },
    {
        id: "4",
        title: "Pride and Prejudice",
        rating: 4,
        status: "Want to read",
        notes: "Jane Austen's witty romance novel. Elizabeth Bennet and Mr. Darcy make for an engaging story.",
        dateAdded: "2023-04-05T16:45:00.000Z"
    },
    {
        id: "5",
        title: "The Catcher in the Rye",
        rating: 3,
        status: "Dropped",
        notes: "J.D. Salinger's coming-of-age story. Holden Caulfield's voice is authentic but the narrative felt repetitive.",
        dateAdded: "2023-05-12T11:20:00.000Z"
    },
    {
        id: "6",
        title: "Harry Potter and the Sorcerer's Stone",
        rating: 5,
        status: "Read",
        notes: "J.K. Rowling's magical beginning to the series. The world-building is incredible and the characters are lovable.",
        dateAdded: "2023-06-18T13:00:00.000Z"
    },
    {
        id: "7",
        title: "The Lord of the Rings",
        rating: 5,
        status: "Reading",
        notes: "J.R.R. Tolkien's epic fantasy. The depth of the world and the heroism of the characters are unparalleled.",
        dateAdded: "2023-07-22T08:30:00.000Z"
    },
    {
        id: "8",
        title: "Dune",
        rating: 4,
        status: "Read",
        notes: "Frank Herbert's science fiction classic. The political intrigue and ecology themes are fascinating.",
        dateAdded: "2023-08-14T15:10:00.000Z"
    },
    {
        id: "9",
        title: "The Hitchhiker's Guide to the Galaxy",
        rating: 4,
        status: "Want to read",
        notes: "Douglas Adams' hilarious take on space travel. The humor and absurdity make it a fun read.",
        dateAdded: "2023-09-09T12:45:00.000Z"
    },
    {
        id: "10",
        title: "Brave New World",
        rating: 3,
        status: "Dropped",
        notes: "Aldous Huxley's dystopian novel. The ideas are interesting but the pacing felt slow.",
        dateAdded: "2023-10-01T17:00:00.000Z"
    },
    {
        id: "11",
        title: "The Alchemist",
        rating: 4,
        status: "Read",
        notes: "Paulo Coelho's inspirational tale. The story of following one's dreams is beautifully told.",
        dateAdded: "2023-11-05T10:30:00.000Z"
    },
    {
        id: "12",
        title: "Sapiens: A Brief History of Humankind",
        rating: 5,
        status: "Reading",
        notes: "Yuval Noah Harari's sweeping overview of human history. The insights are profound and thought-provoking.",
        dateAdded: "2023-12-10T14:20:00.000Z"
    },
    {
        id: "13",
        title: "The Name of the Wind",
        rating: 4,
        status: "Read",
        notes: "Patrick Rothfuss's fantasy novel. The storytelling and world-building are exceptional.",
        dateAdded: "2024-01-15T09:45:00.000Z"
    },
    {
        id: "14",
        title: "Neuromancer",
        rating: 3,
        status: "Want to read",
        notes: "William Gibson's cyberpunk classic. The concepts of cyberspace and AI are groundbreaking.",
        dateAdded: "2024-02-20T16:15:00.000Z"
    },
    {
        id: "15",
        title: "The Road",
        rating: 4,
        status: "Dropped",
        notes: "Cormac McCarthy's post-apocalyptic story. The bleakness is intense but the writing is masterful.",
        dateAdded: "2024-03-25T11:50:00.000Z"
    },
    {
        id: "16",
        title: "Ender's Game",
        rating: 5,
        status: "Read",
        notes: "Orson Scott Card's science fiction novel. The strategy and character development are excellent.",
        dateAdded: "2024-04-30T13:25:00.000Z"
    },
    {
        id: "17",
        title: "The Martian",
        rating: 5,
        status: "Reading",
        notes: "Andy Weir's survival story. The science and humor make it an engaging read.",
        dateAdded: "2024-05-05T08:40:00.000Z"
    },
    {
        id: "18",
        title: "American Gods",
        rating: 4,
        status: "Read",
        notes: "Neil Gaiman's modern mythology. The blend of old and new gods is creative and entertaining.",
        dateAdded: "2024-06-10T15:55:00.000Z"
    },
    {
        id: "19",
        title: "The Silent Patient",
        rating: 3,
        status: "Want to read",
        notes: "Alex Michaelides' psychological thriller. The mystery keeps you guessing.",
        dateAdded: "2024-07-15T12:10:00.000Z"
    },
    {
        id: "20",
        title: "Educated",
        rating: 4,
        status: "Dropped",
        notes: "Tara Westover's memoir. The story of self-education and family dynamics is compelling.",
        dateAdded: "2024-08-20T17:35:00.000Z"
    },
    {
        id: "21",
        title: "The Subtle Art of Not Giving a F*ck",
        rating: 3,
        status: "Read",
        notes: "Mark Manson's self-help book. The counterintuitive advice is refreshing.",
        dateAdded: "2024-09-25T10:05:00.000Z"
    },
    {
        id: "22",
        title: "Project Hail Mary",
        rating: 5,
        status: "Reading",
        notes: "Andy Weir's latest. The science and problem-solving are as good as The Martian.",
        dateAdded: "2024-10-30T14:50:00.000Z"
    },
    {
        id: "23",
        title: "The Seven Husbands of Evelyn Hugo",
        rating: 4,
        status: "Read",
        notes: "Taylor Jenkins Reid's novel. The storytelling and character arcs are captivating.",
        dateAdded: "2024-11-04T09:20:00.000Z"
    },
    {
        id: "24",
        title: "Atomic Habits",
        rating: 4,
        status: "Want to read",
        notes: "James Clear's guide to building good habits. The practical advice is valuable.",
        dateAdded: "2024-12-09T16:40:00.000Z"
    },
    {
        id: "25",
        title: "The Midnight Library",
        rating: 4,
        status: "Dropped",
        notes: "Matt Haig's novel about alternate lives. The concept is intriguing but the execution felt predictable.",
        dateAdded: "2025-01-14T11:15:00.000Z"
    },
    {
        id: "26",
        title: "Circe",
        rating: 5,
        status: "Read",
        notes: "Madeline Miller's retelling of the Greek myth. The character development is outstanding.",
        dateAdded: "2025-02-19T13:30:00.000Z"
    },
    {
        id: "27",
        title: "The Four Winds",
        rating: 4,
        status: "Reading",
        notes: "Kristin Hannah's historical fiction. The depiction of the Dust Bowl era is vivid.",
        dateAdded: "2025-03-26T08:55:00.000Z"
    },
    {
        id: "28",
        title: "Klara and the Sun",
        rating: 3,
        status: "Read",
        notes: "Kazuo Ishiguro's novel. The perspective of an AI companion is unique and thought-provoking.",
        dateAdded: "2025-04-30T15:25:00.000Z"
    },
    {
        id: "29",
        title: "The Invisible Life of Addie LaRue",
        rating: 4,
        status: "Want to read",
        notes: "V.E. Schwab's fantasy novel. The deal with the devil and immortality themes are fascinating.",
        dateAdded: "2025-05-05T12:00:00.000Z"
    },
    {
        id: "30",
        title: "Anxious People",
        rating: 4,
        status: "Dropped",
        notes: "Fredrik Backman's novel. The humor and heart make it enjoyable, but the plot twists felt convoluted.",
        dateAdded: "2025-06-10T17:45:00.000Z"
    }
];

// To use this in main.js, you can add: books = sampleBooks; after loading from localStorage if it's empty
