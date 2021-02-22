/** @format */

import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
  static get styles() {
    return css`
    :host{
      display:block;
      height: auto;
    }
    .container{
      width: 100%;
      height: 100%;
      background-color: rgb(242,242,242);
      margin: 0;
      padding: 0;
    }
    .info{
      display:flex;
      flex-direction:column;
      width: 100%;
      height: 200px;
      align-items: center;


    }
.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background-color: white;
  height: 800px;
  cursor:pointer;
  width: 60%;
  margin: 0px auto;
  padding:0;
  border-radius: 10px;
  margin-bottom: 50px;
}

.post-module:hover{
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

.post-module:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
  opacity: .6;
  transition: all 0.5s ease-in-out;
  }

  .date {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    background-color:rgb(231,76,60);
    width: 45px;
    height: 45px;
    padding: 12px;
    color: white;
    border-radius: 50%;
  }
  .thumbnail{
    display:flex;
    height: 50%;
    width: 100%;
    background-color: grey;
  overflow:hidden;

  }
  .imagebox{
    background-size:cover;
    height: 100%;
    width: 100%;
  object-fit: cover;

  }
  .category {
    position: absolute;
    top: -40px;
    left: 0;
    background:rgb(231,76,60);
    padding: 0px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .category p{
    padding: 10px 35px;
    margin: 0;
  }
  .post-content{
    display: flex;
    flex-direction: column;
    padding:0px 100px 0px 30px;
    position: relative;
    margin:0;
    height: 50%;
  }
  .post-description{
    text-align: justify;
    font-size: 15px;
    line-height: 1.8rem;
    font-weight: lighter;

  }
.post-meta{
  display:grid;
  grid-template-columns: 1fr 1fr;
}

    `;
  }

  render() {
    return html `
    <div class="container">
    <div class='info'>
    <h1>Travel Blog</h1>
    <span> Designed by <a href='http://github.com/kipruto'>Enock</a></span>
  </div>
<div class='post-module'>
<div class='thumbnail'>
<img class='imagebox' src='../images/nbi.jpg'>
<div class='date'>
</div>
</div>
<div class="post-content">
<div class='category'><p>PHOTOS</p></div>
<h1 class='posttitle'>Nairobi, Kenya</h1>
<h2 class='sub_title'> Hearbeat of Africa</h2>
<p class='post-description'>
Nairobi, Kenya's largest city with a population of 4 million people. It sits at the center of Kenya 800km from the coastal line. Its an architectural marvel with laden with plenty of historic museums, modern malls, magnificent buildings architectures and a number of dazzling skyscrapers.</p>
<div class='post-meta'>
<span><i class='fa fa-clock'></i><p>6 minutes ago</p></span>
<span><i class='thumbs-like'></i><p>63 likes</p></span>
</div>
</div>
</div>
<div class='post-module'>
<div class='thumbnail'>
<img class='imagebox' src='../images/Kampala.jpg'>
<div class='date'>
</div>
</div>
<div class="post-content">
<div class='category'><p>PHOTOS</p></div>
<h1 class='posttitle'>Kampala, Uganda</h1>
<h2 class='sub_title'> Africa's Cultural Hub</h2>
<p class='post-description'>
Kampal, Uganda's largest city with a population of 1 million people. It is referred to as the green city of the sun by many authors; this is so, because of the green trees in the city together with the bright sun throughout the year. Also, the region in which Kampala city of found is one of the agriculture areas in Uganda, this, perhaps, is another reason for the different writers to refer to Kampala city as the green city on the sun. Kampala for many years has been the meeting center for farmers from different areas of the country that wish to sell their agricultural products such as coffee, cotton, tea, tobacco, and sugarcane among others.</p>
<div class='post-meta'>
<span><i class='fa fa-clock'></i><p>4 months ago</p></span>
<span><i class='thumbs-like'></i><p>24 likes</p></span>
</div>
</div>
</div>
</div>    
    `;
  }
}

customElements.define("my-element", MyElement);
