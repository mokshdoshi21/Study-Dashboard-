import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes-app-data');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    }
    return [];
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('notes-app-theme');
    return savedTheme === 'dark';
  });

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContent, setCurrentContent] = useState('');

  // Auto-save notes
  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('notes-app-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('notes-app-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addNote = (e) => {
    e.preventDefault();
    if (!currentTitle.trim() && !currentContent.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title: currentTitle,
      content: currentContent,
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    setCurrentTitle('');
    setCurrentContent('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>My Notes</h1>
        <button onClick={toggleTheme} className="toggle-btn">
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main>
        <form className="note-input-container" onSubmit={addNote}>
          <input
            type="text"
            placeholder="Title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
          <textarea
            placeholder="Take a note..."
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        {notes.length === 0 ? (
          <div className="empty-state">
            <p>Your notes will appear here.</p>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note.id} className="note-card">
                {note.title && <h3>{note.title}</h3>}
                {note.content && <p>{note.content}</p>}
                <div className="note-footer">
                  <span>{note.date}</span>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
