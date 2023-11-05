import React from 'react'
import styled from 'styled-components'

export const AboutUs = () => {
  return (
    <DIV>
        <button class="button-54" role="button"><span class="text">Our Mission</span></button><br /><br />
        <p className='main-p'>
        Our mission is simple: to make it easy for you to access the freshest and most nutritious food. We believe that every meal can be a celebration of flavor and well-being, and we're here to help you achieve that.
        </p>
        <div className='div-flex'>
            <div className='fifty'>
                <br /><br /><br />
            <button class="button-54" role="button"><span class="text">About FreshBasket</span></button><br /><br />
                <p id='desc'>FreshBasket: Your Source for Natural Goodness. Discover fresh, delicious natural products at FreshBasket. We offer a variety of dry fruits, vegetables, fruits, and dairy products, all carefully selected for their quality and freshness. Taste the goodness of nature with every bite. Shop with us and enjoy the best that Mother Nature has to offer.</p>
            </div>
            <div className='img-grid fifty'>
            <div className='img-box'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnL0GWPLvsI6820oL4W2G49d10VMztD8Zl6g&usqp=CAU" alt="" />
                 <p>Dry Fruits</p>
            </div>
            <div className='img-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6N57q7e3v0tawWXMV6d8uXMdsiWAna0GCQ&usqp=CAU" alt="" />
                <p>Fruits</p>
            </div>
            <div className='img-box'>
                <img src="data:image/jpeg;base64,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" alt="" />
                <p>Dairy Products</p>
            </div>
            <div className='img-box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgO1BUZo87DiseMxF9TGrNIXn8LkctpRLk6Q&usqp=CAU" alt="" />
                <p>Vegitables</p>
            </div>
            </div>
        </div>
        <button class="button-54" role="button"><span class="text">Our Team</span></button><br /><br />
        <p className='main-p'>Meet the FreshBasket Team: Passionate about Quality, Committed to You</p>
        <div className='team'>
            <div>
                <img src="https://media.istockphoto.com/id/646190406/photo/friendly-team-harvesting-fresh-vegetables-from-the-rooftop-greenhouse-garden-and-planning.webp?b=1&s=170667a&w=0&k=20&c=nM0_nSjoocyDWR_C2f3Rr2fBYSdnNzbpZm8eqymQC1w=" alt="" />
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/643306816/photo/if-its-green-weve-got-it.webp?b=1&s=170667a&w=0&k=20&c=irU2ghYFmURbiTCiF66f1AdoXI-ENeZA8dODhLVV_1I=" alt="" />
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/539218349/photo/farmers-handshake-at-a-farm-with-tractors.webp?b=1&s=170667a&w=0&k=20&c=wa9chhxa4ReqbWaWx6JQA4Llwk0EB4A44so_xFT-ZbE=" alt="" />
            </div>
        </div>
        <br /><br />
        <button class="button-54" role="button"><span class="text">FreshBasket in News</span></button><br /><br />
        <div className='team'>
            <div>
                <img src="https://www.livelaw.in/h-upload/2020/10/16/382923-zee-news.jpg" alt="" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYZOxmzJOOvUxFaA6o0H1qEUfbdWHSxTHRw&usqp=CAU" alt="" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Mlu0oAxzs56kVNq7ZHoz4_x4S4rj39Zy3w&usqp=CAU" alt="" />
            </div>
        </div>
    </DIV>
  )
}
const DIV=styled.div`
margin-top:40px;
/* CSS */
.button-54 {
  --c: #fff;
  /* text color */
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat,
  #29c250;
  /* background color */
  color: #0000;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
  text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
    calc(var(--_i,-1)*-0.08em)  .01em 2px #0004;
  outline-offset: .1em;
  transition: 0.3s;
}

.button-54:hover,
.button-54:focus-visible {
  --_p: 0%;
  --_i: 1;
}

.button-54:active {
  text-shadow: none;
  color: var(--c);
  box-shadow: inset 0 0 9e9q #0005;
  transition: 0s;
}

.button-54 {
  font-weight: bold;
  font-size: 3rem;
  margin: 0;
  cursor: pointer;
  padding: .1em .3em;
}

    .team{
        display:grid;
        width:80%;
        margin:auto;
        gap:100px;
        margin-top:50px;
        grid-template-columns:repeat(3,1fr);
        margin-bottom:30px;
    }
    .team div{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        border-radius:20px;
    }
    .team div:hover{
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    .team img{
        width:100%;
        border-radius:20px;
    }
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
        margin-bottom:0;
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
