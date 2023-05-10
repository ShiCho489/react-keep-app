import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
{/*import notes from './notes';*/}





function App() {
  return (
    <div className="App">
      <Header />
      {/*{notes.map((noteItem) => (
       <Note 
       key= {noteItem.key}
       title={noteItem.title}
       content={noteItem.content}
      />
      ))}*/}
      <CreateNote />
      
      <Footer />
      
    </div>
  );
}

export default App;
