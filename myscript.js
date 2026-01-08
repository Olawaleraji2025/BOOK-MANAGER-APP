const sampleBooks = [
    {
      id: "1",
      title: "The Great Gatsby",
      rating: 5,
      status: "Read",
      notes:
        "A classic tale of the American Dream and its disillusionment. F. Scott Fitzgerald's prose is exquisite.",
      dateAdded: "2023-01-15T10:00:00.000Z",
    },
    {
      id: "2",
      title: "To Kill a Mockingbird",
      rating: 4,
      status: "Read",
      notes:
        "Harper Lee's powerful story about racism and innocence in the American South. Atticus Finch is an unforgettable character.",
      dateAdded: "2023-02-20T14:30:00.000Z",
    },
    {
      id: "3",
      title: "1984",
      rating: 5,
      status: "Reading",
      notes:
        "George Orwell's dystopian masterpiece. The concepts of Big Brother and surveillance are eerily relevant today.",
      dateAdded: "2023-03-10T09:15:00.000Z",
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      rating: 4,
      status: "Want to read",
      notes:
        "Jane Austen's witty romance novel. Elizabeth Bennet and Mr. Darcy make for an engaging story.",
      dateAdded: "2023-04-05T16:45:00.000Z",
    },
    {
      id: "5",
      title: "The Catcher in the Rye",
      rating: 3,
      status: "Dropped",
      notes:
        "J.D. Salinger's coming-of-age story. Holden Caulfield's voice is authentic but the narrative felt repetitive.",
      dateAdded: "2023-05-12T11:20:00.000Z",
    },
    {
      id: "6",
      title: "Harry Potter and the Sorcerer's Stone",
      rating: 5,
      status: "Read",
      notes:
        "J.K. Rowling's magical beginning to the series. The world-building is incredible and the characters are lovable.",
      dateAdded: "2023-06-18T13:00:00.000Z",
    },
    {
      id: "7",
      title: "The Lord of the Rings",
      rating: 5,
      status: "Reading",
      notes:
        "J.R.R. Tolkien's epic fantasy. The depth of the world and the heroism of the characters are unparalleled.",
      dateAdded: "2023-07-22T08:30:00.000Z",
    },
    {
      id: "8",
      title: "Dune",
      rating: 4,
      status: "Read",
      notes:
        "Frank Herbert's science fiction classic. The political intrigue and ecology themes are fascinating.",
      dateAdded: "2023-08-14T15:10:00.000Z",
    },
    {
      id: "9",
      title: "The Hitchhiker's Guide to the Galaxy",
      rating: 4,
      status: "Want to read",
      notes:
        "Douglas Adams' hilarious take on space travel. The humor and absurdity make it a fun read.",
      dateAdded: "2023-09-09T12:45:00.000Z",
    },
    {
      id: "10",
      title: "Brave New World",
      rating: 3,
      status: "Dropped",
      notes:
        "Aldous Huxley's dystopian novel. The ideas are interesting but the pacing felt slow.",
      dateAdded: "2023-10-01T17:00:00.000Z",
    },
    {
      id: "11",
      title: "The Alchemist",
      rating: 4,
      status: "Read",
      notes:
        "Paulo Coelho's inspirational tale. The story of following one's dreams is beautifully told.",
      dateAdded: "2023-11-05T10:30:00.000Z",
    },
    {
      id: "12",
      title: "Sapiens: A Brief History of Humankind",
      rating: 5,
      status: "Reading",
      notes:
        "Yuval Noah Harari's sweeping overview of human history. The insights are profound and thought-provoking.",
      dateAdded: "2023-12-10T14:20:00.000Z",
    },
    {
      id: "13",
      title: "The Name of the Wind",
      rating: 4,
      status: "Read",
      notes:
        "Patrick Rothfuss's fantasy novel. The storytelling and world-building are exceptional.",
      dateAdded: "2024-01-15T09:45:00.000Z",
    },
    {
      id: "14",
      title: "Neuromancer",
      rating: 3,
      status: "Want to read",
      notes:
        "William Gibson's cyberpunk classic. The concepts of cyberspace and AI are groundbreaking.",
      dateAdded: "2024-02-20T16:15:00.000Z",
    },
    {
      id: "15",
      title: "The Road",
      rating: 4,
      status: "Dropped",
      notes:
        "Cormac McCarthy's post-apocalyptic story. The bleakness is intense but the writing is masterful.",
      dateAdded: "2024-03-25T11:50:00.000Z",
    },
    {
      id: "16",
      title: "Ender's Game",
      rating: 5,
      status: "Read",
      notes:
        "Orson Scott Card's science fiction novel. The strategy and character development are excellent.",
      dateAdded: "2024-04-30T13:25:00.000Z",
    },
    {
      id: "17",
      title: "The Martian",
      rating: 5,
      status: "Reading",
      notes:
        "Andy Weir's survival story. The science and humor make it an engaging read.",
      dateAdded: "2024-05-05T08:40:00.000Z",
    },
    {
      id: "18",
      title: "American Gods",
      rating: 4,
      status: "Read",
      notes:
        "Neil Gaiman's modern mythology. The blend of old and new gods is creative and entertaining.",
      dateAdded: "2024-06-10T15:55:00.000Z",
    },
    {
      id: "19",
      title: "The Silent Patient",
      rating: 3,
      status: "Want to read",
      notes:
        "Alex Michaelides' psychological thriller. The mystery keeps you guessing.",
      dateAdded: "2024-07-15T12:10:00.000Z",
    },
    {
      id: "20",
      title: "Educated",
      rating: 4,
      status: "Dropped",
      notes:
        "Tara Westover's memoir. The story of self-education and family dynamics is compelling.",
      dateAdded: "2024-08-20T17:35:00.000Z",
    },
    {
      id: "21",
      title: "The Subtle Art of Not Giving a F*ck",
      rating: 3,
      status: "Read",
      notes:
        "Mark Manson's self-help book. The counterintuitive advice is refreshing.",
      dateAdded: "2024-09-25T10:05:00.000Z",
    },
    {
      id: "22",
      title: "Project Hail Mary",
      rating: 5,
      status: "Reading",
      notes:
        "Andy Weir's latest. The science and problem-solving are as good as The Martian.",
      dateAdded: "2024-10-30T14:50:00.000Z",
    },
    {
      id: "23",
      title: "The Seven Husbands of Evelyn Hugo",
      rating: 4,
      status: "Read",
      notes:
        "Taylor Jenkins Reid's novel. The storytelling and character arcs are captivating.",
      dateAdded: "2024-11-04T09:20:00.000Z",
    },
    {
      id: "24",
      title: "Atomic Habits",
      rating: 4,
      status: "Want to read",
      notes:
        "James Clear's guide to building good habits. The practical advice is valuable.",
      dateAdded: "2024-12-09T16:40:00.000Z",
    },
    {
      id: "25",
      title: "The Midnight Library",
      rating: 4,
      status: "Dropped",
      notes:
        "Matt Haig's novel about alternate lives. The concept is intriguing but the execution felt predictable.",
      dateAdded: "2025-01-14T11:15:00.000Z",
    },
    {
      id: "26",
      title: "Circe",
      rating: 5,
      status: "Read",
      notes:
        "Madeline Miller's retelling of the Greek myth. The character development is outstanding.",
      dateAdded: "2025-02-19T13:30:00.000Z",
    },
    {
      id: "27",
      title: "The Four Winds",
      rating: 4,
      status: "Reading",
      notes:
        "Kristin Hannah's historical fiction. The depiction of the Dust Bowl era is vivid.",
      dateAdded: "2025-03-26T08:55:00.000Z",
    },
    {
      id: "28",
      title: "Klara and the Sun",
      rating: 3,
      status: "Read",
      notes:
        "Kazuo Ishiguro's novel. The perspective of an AI companion is unique and thought-provoking.",
      dateAdded: "2025-04-30T15:25:00.000Z",
    },
    {
      id: "29",
      title: "The Invisible Life of Addie LaRue",
      rating: 4,
      status: "Want to read",
      notes:
        "V.E. Schwab's fantasy novel. The deal with the devil and immortality themes are fascinating.",
      dateAdded: "2025-05-05T12:00:00.000Z",
    },
    {
      id: "30",
      title: "Anxious People",
      rating: 4,
      status: "Dropped",
      notes:
        "Fredrik Backman's novel. The humor and heart make it enjoyable, but the plot twists felt convoluted.",
      dateAdded: "2025-06-10T17:45:00.000Z",
    },
  ];
  let books = JSON.parse(localStorage.getItem("books")) || sampleBooks;
  let bookToDeleteId = null;


  // The DOM Elements that might be need for interactivity
  const addBookForm = document.getElementById("addBookForm");
  const booksGridView = document.getElementById("booksGridView");
  const booksListView = document.getElementById("booksListView");
  const booksListBody = document.getElementById("booksListBody");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const ratingFilter = document.getElementById("ratingFilter");
  const statusFilter = document.getElementById("statusFilter");
  const sortBy = document.getElementById("sortBy");
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");
  const editModal = document.getElementById("editModal");
  const closeEditModal = document.getElementById("closeEditModal");
  const cancelEdit = document.getElementById("cancelEdit");
  const editBookForm = document.getElementById("editBookForm");
  const deleteModal = document.getElementById("deleteModal");
  const closeDeleteModal = document.getElementById("closeDeleteModal");
  const cancelDelete = document.getElementById("cancelDelete");
  const confirmDelete = document.getElementById("confirmDelete");
  const deleteBookTitle = document.getElementById("deleteBookTitle");


  document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("books")) {
      localStorage.setItem("books", JSON.stringify(sampleBooks));
    }
    
feather.replace();

  // This Add book and Form submission functionality is being called here
addBookForm.addEventListener("submit", handleAddBook);
editBookForm.addEventListener("submit", handleEditBook);

// This is to switch between the grid and list display type
gridViewBtn.addEventListener("click", () => toggleView("grid"));
listViewBtn.addEventListener("click", () => toggleView("list"));


// This is for the filters and sorting functionality
searchInput.addEventListener("input", renderBooks);
ratingFilter.addEventListener("change", renderBooks);
statusFilter.addEventListener("change", renderBooks);
sortBy.addEventListener("change", renderBooks);

getAllBooks();
renderBooks();

  // These are the modal functionality e.g delete or edit modals
  closeEditModal.addEventListener("click", () =>
    editModal.classList.remove("active")
  );
  cancelEdit.addEventListener("click", () =>
    editModal.classList.remove("active")
  );
  closeDeleteModal.addEventListener("click", () =>
    deleteModal.classList.remove("active")
  );
  cancelDelete.addEventListener("click", () =>
    deleteModal.classList.remove("active")
  );
  confirmDelete.addEventListener("click", handleDeleteBook);
})

// This functionality will get all books from the local Storage 
function getAllBooks() {
    localStorage.getItem("books")
    
}

// This functionality will save a new book
function saveNewBook() {
   localStorage.setItem("books", JSON.stringify(books))
    
}

// This functionality will Add a new book
function handleAddBook(e) {
    
    e.preventDefault();
    
    const title = document.getElementById("title").value.trim();
    const rating =
      document.querySelector('input[name="rating"]:checked')?.value || 0;
    const status = document.getElementById("status").value;
    const notes = document.getElementById("notes").value.trim();

    if (!title) {
      alert("Please enter a title for the book");
      return;
    } else{
        // alert("Book Added!")
    }

    const newBook = {
      id: Date.now().toString(),
      title,
      rating: parseInt(rating),
      status,
      notes,
      dateAdded: new Date(),
    };
    console.log(newBook.id);

    books.unshift(newBook);
     saveNewBook();
     renderBooks();
    // updateStats();

    // This will reset all values in the form to default i.e Empty
    addBookForm.reset();
   
  }

  // This functionality will Filter and Sort Books
  function getFilteredBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const minRating = parseInt(ratingFilter.value);
    const statusFilterValue = statusFilter.value;
    const sortByValue = sortBy.value;

    // let filteredBooks = books;
    let filteredBooks = [...books];

    // This is for the search feature
    if (searchTerm) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
    }

    // This is for the rating filter
    if (minRating > 0) {
      filteredBooks = filteredBooks.filter((book) => book.rating >= minRating);
    }

    // This is for the status filter
    if (statusFilterValue !== "all") {
      filteredBooks = filteredBooks.filter(
        (book) => book.status === statusFilterValue
      );
    }

    // This is for the sorting
    switch (sortByValue) {
      case "title":
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating":
        filteredBooks.sort((a, b) => b.rating - a.rating);
        break;
      default: // dateAdded
        filteredBooks.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
    }

    return filteredBooks;
  }

  // This will displays books based on current view and newly added book by the user
   let currentView = "grid"
  function renderBooks() {
    const filteredBooks = getFilteredBooks();

    // Show empty state if no books
    if (filteredBooks.length === 0) {
      emptyState.classList.add("active");
      booksGridView.innerHTML = "";
      booksListBody.innerHTML = "";
      return;
    } else {
      emptyState.classList.remove("active");
    }
    
    

    if (currentView === "grid") {
      renderGridView(filteredBooks);
    } else {
      renderListView(filteredBooks);
    }

    // Re-initialize Feather Icons for newly rendered elements
    feather.replace();
  }

   // This functionality will displays books in grid view
   function renderGridView(booksToDisplay) {
    booksGridView.innerHTML = "";

    booksToDisplay.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.className = "book-card fade-in";
      bookElement.dataset.bookId = book.id;
      // console.log(bookElement.dataset);

    //   const statusClass = getStatusClass(book.status);

      bookElement.innerHTML = `
                <div>
                    <div class="book-header">
                        <h3>${book.title}</h3>
                        <div class="book-actions">
                            <button onclick="openEditModal('${book.id}')">
                                <i data-feather="edit-2"></i>
                            </button>
                            <button onclick="openDeleteModal('${book.id}')">
                                <i data-feather="trash-2"></i>
                            </button>
                        </div>
                    </div>
                   
                    <div class="notes-content notes-collapsed" style="max-width: 300px;">
                    
                    ${book.notes}
                    </div>

                    <div class="book-info">
                        <div class="stars">
                            ${renderStars(book.rating)}
                        </div>
                        </div>
                    
                    <div class="quick-status">
                        <button onclick="quickChangeStatus('${
                          book.id
                        }', 'Want to read')" class="${
        book.status === "Want to read" ? "active-want" : ""
      }">
                            Want
                        </button>
                        <button onclick="quickChangeStatus('${
                          book.id
                        }', 'Reading')" class="${
        book.status === "Reading" ? "active-reading" : ""
      }">
                            Reading
                        </button>
                        <button onclick="quickChangeStatus('${
                          book.id
                        }', 'Read')" class="${
        book.status === "Read" ? "active-read" : ""
      }">
                            Read
                        </button>
                        <button onclick="quickChangeStatus('${
                          book.id
                        }', 'Dropped')" class="${
        book.status === "Dropped" ? "active-dropped" : ""
      }">
                            Dropped
                        </button>
                    </div>
                </div>
            `;

      booksGridView.appendChild(bookElement);
    });
  }

   // This will displays books in list view
   function renderListView(booksToRender) {
    booksListBody.innerHTML = "";

    booksToRender.forEach((book) => {
      const statusClass = getStatusClass(book.status);

      const row = document.createElement("tr");
      row.className = "fade-in";
      row.dataset.bookId = book.id;

      row.innerHTML = `
                <td>
                    <div style="font-weight: 500;">${book.title}</div>
                </td>
                <td>
                    <div class="stars">
                        ${renderStars(book.rating)}
                    </div>
                </td>
                <td>
                    <span class="status-badge ${statusClass}">${
        book.status
      }</span>
                </td>
                <td>
                    <div class="notes-content notes-collapsed" style="max-width: 300px;">${
                      book.notes || "—"
                    }</div>
                    
                </td>
                <td>
                    <div class="list-actions">
                        
                        <button onclick="openEditModal('${book.id}')">
                            <i data-feather="edit-2"></i>
                        </button>
                        <button onclick="openDeleteModal('${book.id}')">
                            <i data-feather="trash-2"></i>
                        </button>
                    </div>
                </td>
            `;

      booksListBody.appendChild(row);
    });
  }

  // This is for the list view status i.e read or want to read e.t.c
  function getStatusClass(status) {
    switch (status) {
      case "Want to read":
        return "status-want-to-read";
      case "Reading":
        return "status-reading";
      case "Read":
        return "status-read";
      case "Dropped":
        return "status-dropped";
      default:
        return "";
    }
  }

  //This will display the rating stars
  function renderStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "★" : "☆";
    }
    return stars;
  }

  // This functionality will open the edit modal or alert
  function openEditModal(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (!book) return;

    // This will set the values in the modal such as Title to the values you clicked on.
    document.getElementById("editBookId").value = book.id;
    document.getElementById("editTitle").value = book.title;
    document.getElementById("editNotes").value = book.notes;
    document.getElementById("editStatus").value = book.status;

    // This is saying that go to the element input field and set the value to be whatever value the user clicked
    const ratingInput = document.querySelector(
      `#editRatingContainer input[value="${book.rating}"]`
    );
    if (ratingInput) ratingInput.checked = true;

    editModal.classList.add("active");
  }

  // This functionality will replace or update the data or task we want to change
  function handleEditBook(e) {
    e.preventDefault();

    const bookId = document.getElementById("editBookId").value;
    const title = document.getElementById("editTitle").value.trim();
    const rating =
      document.querySelector('input[name="editRating"]:checked')?.value || 0;
    const status = document.getElementById("editStatus").value;
    const notes = document.getElementById("editNotes").value.trim();

    if (!title) {
      alert("Please enter a title for the book");
      return;
    }

    const bookIndex = books.findIndex((b) => b.id === bookId);
    if (bookIndex !== -1) {
      books[bookIndex] = {
        ...books[bookIndex],
        title,
        rating: parseInt(rating),
        status,
        notes,
      };

      saveNewBook();
      renderBooks();
      // updateStats();
      editModal.classList.remove("active");
    }
  }

// This functionality will allow open the delete modal or alert
 function openDeleteModal(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (!book) return;

  bookToDeleteId = bookId;
  deleteBookTitle.textContent = book.title;
  deleteModal.classList.add("active");
}

// This functionality will not actually delete but filter out the id that doesnt match in the array then saved it i.e delete
function handleDeleteBook() {
  books = books.filter((b) => b.id !== bookToDeleteId);
  saveNewBook();
  renderBooks();
  // updateStats();
  deleteModal.classList.remove("active");
  bookToDeleteId = null;
}

// This will change the view from grid to list
  function toggleView(view) {
    currentView = view;

    if (view === "grid") {
      booksGridView.style.display = "grid";
      booksListView.classList.remove("active");
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
    } else {
      booksGridView.style.display = "none";
      booksListView.classList.add("active");
      gridViewBtn.classList.remove("active");
      listViewBtn.classList.add("active");
    }

    renderBooks();
  }