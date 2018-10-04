import React, { Component } from 'react';
import img from './images/v1.png';
import {Link} from 'react-router-dom';
import Main from './Main.js';


class Home extends Component {
  render() {
    return (
         <div>

           <header>
        <div class="container-full">
          <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12">
          <a id="main-category-toggler" class="hidden-md hidden-lg hidden-md"  href="#">
                      <i class="fa fa-navicon"></i>
                    </a>
          <a id="main-category-toggler-close" class="hidden-md hidden-lg hidden-md" href="#">
                      <i class="fa fa-close"></i>
                    </a>
                    <div id="logo">
                        <a href="01-home.html"><img /></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 hidden-xs hidden-sm">
                    <div class="search-form">
                        <form id="search" action="#" method="post">
                            <input type="text" placeholder="Search here video posts..."/>
                            <input type="submit" value="Keywords" />
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-5 hidden-xs hidden-sm">
                    <ul class="top-menu">
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/trending" >Trending</Link></li>
                  </ul>
                  
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 hidden-xs hidden-sm">
                    <ul class="notifications">
                        <li class="dropdown">
                        <a href="#"  data-toggle="dropdown"><i class="fa fa-users"></i>
                          <span class="badge badge-color1 header-badge">3</span>
                        </a>
                              <ul class="dropdown-menu dropdown-menu-friend-requests ">
                                <li>
                                  <div class="friend-requests-info">
                                        <div class="thumb"><a href="#"><img  alt=""/></a></div>
                                        <a href="#" class="name">Ahmed Saleh </a>
                                        <span>Ahmed Saleh : Follow you now</span>
                                    </div>
                                </li>
                                <li>
                                  <div class="friend-requests-info">
                                        <div class="thumb"><a href="#"><img  alt=""/></a></div>
                                        <a href="#" class="name">Ahmed Saleh </a>
                                        <span>Ahmed Saleh : Follow you now</span>
                                    </div>
                                </li>
                                <li>
                                  <div class="friend-requests-info">
                                        <div class="thumb"><a href="#"><img  alt=""/></a></div>
                                        <a href="#" class="name">Ahmed Saleh </a>
                                        <span>Ahmed Saleh : Follow you now</span>
                                    </div>
                                </li>
                                <li>
                                  <div class="friend-requests-info">
                                        <div class="thumb"><a href="#"><img  alt=""/></a></div>
                                        <a href="#" class="name">Ahmed Saleh </a>
                                        <span>Ahmed Saleh : Follow you now</span>
                                    </div>
                                </li>
                              </ul>
                        </li>
                        <li class="dropdown">
                        <a href="#" data-toggle="dropdown"><i class="fa fa-info-circle"></i>
                          <span class="badge badge-color2 header-badge">4</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-help-cnter">
                          <li>
                              <h2 class="title">Help center</h2>
                                <div class="search-form">
                                    <form id="search-2" action="#" method="post">
                                        <input type="text" placeholder="Search here video posts..."/>
                                        <input type="submit" value="Keywords" />
                                    </form>
                                </div>
                            </li>
                            <li>
                              <h2 class="title">Help on</h2>
                                <ul class="help-cat-link">
                                  <li><a href="#">the video</a></li>
                                  <li><a href="#">Copyrights</a></li>
                                  <li><a href="#">Members</a></li>
                                  <li><a href="#">Register</a></li>
                                  <li><a href="#">Comments</a></li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                        <li class="dropdown">
                        <a href="#" data-toggle="dropdown"><i class="fa fa-bell-o"></i>
                          <span class="badge badge-color3 header-badge">9</span>
                        </a>
            <ul class="dropdown-menu dropdown-notifications-items ">
                          <li>
                              <div class="notification-info">
                                    <a href="#"><i class="fa fa-video-camera color-1"></i>
                                    <strong>Rabie Elkheir</strong> Add a new <span>Video</span>
                                    <h5 class="time">4 hours ago</h5>
                                    </a>
                                </div>
                            </li>
                          <li>
                              <div class="notification-info">
                                    <a href="#"><i class="fa fa-thumbs-up color-2"></i>
                                    <strong>Rabie Elkheir</strong> Add a new <span>Video</span>
                                    <h5 class="time">4 hours ago</h5>
                                    </a>
                                </div>
                            </li>
                          <li>
                              <div class="notification-info">
                                    <a href="#"><i class="fa fa-comment color-3"></i>
                                    <strong>Rabie Elkheir</strong> Add a new <span>Video</span>
                                    <h5 class="time">4 hours ago</h5>
                                    </a>
                                </div>
                            </li>
                          <li>
                              <div class="notification-info">
                                    <a href="#"><i class="fa fa-video-camera color-1"></i>
                                    <strong>Rabie Elkheir</strong> Add a new <span>Video</span>
                                    <h5 class="time">4 hours ago</h5>
                                    </a>
                                </div>
                            </li>
                            <li>
                              <a href="#" class="all_notifications">All Notifications</a>
                            </li>
                        </ul>

                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-3 hidden-xs hidden-sm">
            <div class="dropdown">
                        <a data-toggle="dropdown" href="#" class="user-area">
                            <div class="thumb"><img  alt=""/></div>
                            <h2>Rabie Elkheir</h2>
                            <h3>25 subscribers</h3>
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu account-menu">
                           <li><a href="#"><i class="fa fa-edit color-1"></i>Edit profile</a></li>
                           <li><a href="#"><i class="fa fa-video-camera color-2"></i>add video</a></li>
                           <li><a href="#"><i class="fa fa-star color-3"></i>Favorites</a></li>
                           <li><a href="#"><i class="fa fa-sign-out color-4"></i>sign out</a></li>
                        </ul>
            </div>
                </div>
            </div>    </div>
      </header>      <div id="main-category">
        <div class="container-full">
          <div class="row">
                <div class="col-md-12">
                    <ul class="main-category-menu">
                        <li class="color-1"><a href="02-category.html"><i class="fa fa-music"></i>Music</a></li>
                        <li class="color-2"><a href="02-category.html"><i class="fa fa-soccer-ball-o"></i>Sports</a></li>
                        <li class="color-3"><a href="02-category.html"><i class="fa fa-gamepad"></i>Gaming</a></li>
                        <li class="color-4"><a href="02-category.html"><i class="fa fa-globe"></i>News</a></li>
                        <li class="color-1"><a href="02-category.html"><i class="fa fa-play-circle-o"></i>Live</a></li>
                        <li class="color-2"><a href="02-category.html"><i class="fa fa-repeat"></i>360° Video</a></li>
                        <li class="color-3"><a href="02-category.html"><i class="fa fa-th-large"></i>Template Pages</a>
                          <ul>
                              <li><a href="01-home.html">01-home </a></li>
                              <li><a href="02-category.html">02-category </a></li>
                              <li><a href="03-category_videos.html">03-category_videos  </a></li>
                              <li><a href="04-category_chanels.html">04-category_chanels </a></li>
                              <li><a href="05-category_playlists.html">05-category_playlists </a></li>
                              <li><a href="06-category_about.html">06-category_about </a></li>
                              <li><a href="07-log_in_page.html">07-log_in_page </a></li>
                              <li><a href="08-sign_up_page.html">08-sign_up_page </a></li>
                              <li><a href="09-watch.html">09-watch </a></li>
                              <li><a href="10-upload.html">10-upload </a></li>
                              <li><a href="11-blog.html">11-blog </a></li>
                              <li><a href="12-single.html">12-single </a></li>
                              <li><a href="13-404_page.html">13-404_page </a></li>
                              <li><a href="14-history.html">14-history </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>>
              </div>      </div>
      </div>

    <div class="site-output">
        
       
        <div id="all-output" class="col-md-12" style={{backgroundColor:'#fff'}}>
          <h1 class="new-video-title"><i class="fa fa-bolt"></i> Live Streaming</h1>
            <div class="row">

                                
                


                                <div class=" col-lg-8 ">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img src={img} style={{width:'900px'}} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                  <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            
                            <a href="#"><img src={img} style={{height:'477px'}} alt=""/></a>
                        </div>
                        
                    </div>
                </div>


                                

                                             

            </div>      <h1 class="new-video-title"><i class="fa fa-soccer-ball-o"></i> sport</h1>
            <div class="row">

                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img src={img}  alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img  src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
              

            </div>      <h1 class="new-video-title"><i class="fa fa-globe"></i> News</h1>
            <div class="row">

                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img  src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img  src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img  src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                


                                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="video-item">
                        <div class="thumb">
                          <div class="hover-efect"></div>
                            <small class="time">10:53</small>
                            <a href="#"><img src={img} alt=""/></a>
                        </div>
                        <div class="video-info">
                            <a href="#" class="title">Lorem Ipsum is simply dummy text of the printing and </a>
                            <a class="channel-name" href="#">Rabie Elkheir<span>
                            <i class="fa fa-check-circle"></i></span></a>
                            <span class="views"><i class="fa fa-eye"></i>2.8M views </span>
                            <span class="date"><i class="fa fa-clock-o"></i>5 months ago </span>
                        </div>
                    </div>
                </div>
                

            </div>         
            <div id="loading-more">
              <i class="fa fa-refresh faa-spin animated"></i> <span>Loading more</span>
            </div>
            

    </div>
      </div>
           

         </div>
    );
  }
}

export default Home;
