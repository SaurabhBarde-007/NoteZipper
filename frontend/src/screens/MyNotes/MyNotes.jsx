
import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Card,Badge, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

const MyNotes = () => {

    const[notes,setNotes] = useState([]);


    const deleteHandler = (id) => {
        if(window.confirm("Are you sure")){

        }
    }

    const fetchNotes = async() => {
        const { data } = await axios.get('http://localhost:5000/api/notes');
        // console.log(data)
        setNotes(data);
    }

        console.log(notes)   

    useEffect(()=>{
        fetchNotes();
 
    }, [])

  return (
    <MainScreen title="Welcome back Thunder Bolt..">
        <Link to="createnote">
            <Button style={{marginleft:10,marginBottom:6}} size='lg'>
                Create New Note
            </Button>
        </Link> 
            {
                notes.map((note)=>{
                    return (
                        <Accordion key={note._id}>
                            <Card style={{margin:10}}>
                                <Card.Header style={{display:"flex" }}>
                                    <span
                                     style={{
                                        color:"black",
                                        textDecoration:"none",
                                        flex:1,
                                        cursor:"pointer",
                                        alignSelf:"center",
                                        fontSize:18,
                                     }}
                                    >
                                        <Accordion.Button eventkey={note._id} style={{
                                            all:"unset"
                                        }}>
                                            {note.title}
                                        </Accordion.Button>
                                    </span>
                                    
                                    <div>
                                        <Button href={`/note/${note._id}`}>Edit</Button>
                                        <Button variant='danger' className='mx-2' onClick={()=>{
                                            deleteHandler(note._id)
                                        }}>
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Header>
                                <Accordion.Body eventkey={note._id}>
                                    <Card.Body>
                                        <h4>
                                            <Badge style={{color:"White"}} bg='success'>
                                                Category - {note.category}
                                            </Badge>
                                        </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {note.content}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Created On - date
                                            </footer>
                                            </blockquote>
                                    </Card.Body>
                                </Accordion.Body>
                            </Card>
                        </Accordion>  
                    )
                })
            }
    </MainScreen>
  )
}

export default MyNotes