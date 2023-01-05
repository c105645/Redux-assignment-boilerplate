import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewsItem.css'
import { Link } from "react-router-dom";


const NewsItem = ({ news, bookmarkEvt, isBookMarked }) => {
  return (
    <div className='newscard'>
      <Card>
        <Card.Img width="100%" height="300px" src={news.urlToImage} alt={news.title} />
        <Card.ImgOverlay className="imageoverlay">
          <Card.Title className='cardtitle'>
            <h5>
              {news.title}
            </h5>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Body className="cardbody">
          <Card.Text>
            {news.description ? news.description.substring(0, 75) + " ..." : ""}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='footerContainer'>
          {/* <Button variant="link" className="ml-0" >Read more...</Button> */}
          <Link to={`/newsdetails/${news.title}/${isBookMarked}`}>Read More...</Link>
          <Button variant="outline-primary" className='w-25' type="button" onClick={() => bookmarkEvt(news)}>
            {isBookMarked ?
              <div className="bi bi-bookmark-fill"></div>
              :
              <div className="bi bi-bookmark"></div>
            }
          </Button>
        </Card.Footer>

      </Card>
    </div>



  );
}

export default NewsItem;