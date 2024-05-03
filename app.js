// set up express server
import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';
import db from './config.js';
import { collection, query, doc, addDoc, setDoc, getDoc, getDocs } from 'firebase/firestore';

app.use(express.json());
app.use(cors());

const blogsRef = collection(db, 'blogs');

// set up the route
app.post('/addBlog', async (req, res) => {
  const data = req.body;
  
  await addDoc(collection(db, 'blogs'), {
    title: data.title,
    img_url: data.img_url,
    content: data.content,
    created_at: new Date().toJSON(),
  });

  res.send({message: 'Blog data saved successfully'});
});
app.get('/blog', async (req, res) => {
  const blogId = req.query.id;
  const docRef = doc(db, 'blogs', blogId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.send(docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    res.send('No such document!');
  }
});
app.get('/blogs', async (req, res) => {
  const q = query(collection(db, 'blogs'));
  const querySnapshot = await getDocs(q);
  const blogs = [];
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    blogs.push({
      id: doc.id,
      title: doc.data().title,
      img_url: doc.data().img_url,
      content: doc.data().content,
      created_at: doc.data().created_at,
    });
  });
  res.send(blogs);
});
app.post('/updateBlog', async (req, res) => {
  const data = req.body;

  await setDoc(doc(blogsRef, req.query.id), {
    title: data.title,
    img_url: data.img_url,
    content: data.content,
    created_at: new Date().toJSON(),
  });

  res.send('Blog data updated successfully.');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
