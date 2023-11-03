import React from 'react'
import styled from 'styled-components'

export const AboutUs = () => {
  return (
    <DIV>
        <h1 className='main-h'>Our Mission</h1>
        <p className='main-p'>
        Our mission is simple: to make it easy for you to access the freshest and most nutritious food. We believe that every meal can be a celebration of flavor and well-being, and we're here to help you achieve that.
        </p>
        <div className='div-flex'>
            <div className='fifty'>
                <h3 id='desc-heading'>About Fresh Food</h3>
                <p id='desc'>At Fresh Wood, we're more than just a wood products provider; we're your trusted partner in transforming spaces into natural, timeless, and beautifully crafted environments. With a deep-rooted passion for wood and a commitment to quality, sustainability, and craftsmanship, we bring nature's warmth and beauty into your home and projects.</p>
            </div>
            <div className='img-grid fifty'>
            <div className='img-box'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL0GWPLvsI6820oL4W2G49d10VMztD8Zl6g&usqp=CAU" alt="" />
                 <p>Dry Fruits</p>
            </div>
            <div className='img-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL0GWPLvsI6820oL4W2G49d10VMztD8Zl6g&usqp=CAU" alt="" />
                <p>Fruits</p>
            </div>
            <div className='img-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL0GWPLvsI6820oL4W2G49d10VMztD8Zl6g&usqp=CAU" alt="" />
                <p>Dairy Products</p>
            </div>
            <div className='img-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL0GWPLvsI6820oL4W2G49d10VMztD8Zl6g&usqp=CAU" alt="" />
                <p>Vegitables</p>
            </div>
            </div>
        </div>
    </DIV>
  )
}
const DIV=styled.div`
    .img-box{
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius:5%;
        padding:10px;
    }
    .img-box:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    .img-box p{
        font-size:25px;
        margin:5px;
    }
    .fifty{
        width:50%;
        margin:3%;
    }
    #desc-heading{
        font-size:40px;
        text-align:left;
        margin-left:3%;
        color:#29c250;
    }
    #desc{
        color:#707a87;
        font-size:25px;
        text-align:justify;
        margin-left:3%;
    }
    .main-h{
        font-size:50PX;
        color:#29c250;
    }
    .main-p{
        font-size:25px;
        width:50%;
        color:#707a87;
        margin:auto; 
    }
    .img-grid{
        display:grid;
        grid-template-columns: 300px 300px;
        gap: 20px;

    }
    img{
        width:100%;
        border-radius:5% 5% 0 0;
    }
    .div-flex{
        display:flex;
    }
`;
