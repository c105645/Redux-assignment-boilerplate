import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewsDetails.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { addBookmark, removeBookmark, selectAllBookMarks} from '../Slices/BookmarksSlice';
import { useSelector, useDispatch } from 'react-redux'




const NewsDetails = ({ match }) => {

    const dispatch = useDispatch()

    const { title } = match.params;

    console.log(title)
    
    const bookmarks = useSelector(selectAllBookMarks);
    const newsItemByTitle = useSelector(state => state.news.news.find(news => news.title === title));



    const isBookmarked =  bookmarks[title] ? true:false;

    console.log("isBookmarked:", isBookmarked);


    const bookmarkEvt = (news) => {
        if (!isBookmarked) {
            dispatch(addBookmark(news));
        } else {
            console.log("removeeeeeeeeee");
            const id = bookmarks[news.title].id;
           dispatch(removeBookmark(id));

        }
    }




        return newsItemByTitle ? 
         (
        <div className='newsdetailcard'>
             <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <Breadcrumb.Item><Link to='/'>News Dashboard</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            <Card width="100%" height="100%">
           
                <Card.Img width="100%" height="300px" src={newsItemByTitle.urlToImage } alt={newsItemByTitle.title} />
                <Card.ImgOverlay className="newsdetailimageoverlay">
                    <Card.Title className='newsdetailcardtitle'>
                        <h5>
                            {newsItemByTitle.title}
                        </h5>

                        <Button variant="outline-primary" className='w-10' type="button" onClick={() => bookmarkEvt(newsItemByTitle)}>
                            {isBookmarked ?
                                <div className="bi bi-bookmark-fill"></div>
                                :
                                <div className="bi bi-bookmark"></div>
                            }
                        </Button>

                    </Card.Title>
                </Card.ImgOverlay>
                <Card.Body className="newsdetailcardbody">
                    <Card.Text>
                        {newsItemByTitle.content }
                    </Card.Text>
                </Card.Body>


            </Card>
        </div>
    ) :

    (<div>Loading state....</div>)
}
export default NewsDetails;