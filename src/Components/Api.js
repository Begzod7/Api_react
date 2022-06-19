import React from 'react';
// import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import './Style.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RiUserLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { FcCallback } from 'react-icons/fc'
import Between from './Between';
import Partner from './Partner';
import Imgs from '../imgs/edumall-shape-01.png';
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


function Api() {

    // API manzil

    const [courses, setCourses] = useState([])
    const [lecturers, setLecturers] = useState([])
    const [modules, setModules] = useState([])
    const [webinars, setWebinars] = useState([])

    const fetchComments = async () => {
        const res = await fetch(
            `https://api.bimm.uz/api/shared/dashboard.php`
        );
        const data = await res.json();

        const { courses, lecturers, modules, webinars } = data
        setCourses(courses)
        setLecturers(lecturers)
        setModules(modules)
        setWebinars(webinars)

    };

    useEffect(() => {
        fetchComments();
    }, []);
    return (
        <div className='full'>

            <div className='container'>

                {/* Courses */}
                <div className="row py-5" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <h2 className='text-center'>KURSLAR</h2>
                    {courses.map((item) => {
                        return <div key={item.id} className="col-sm-6 col-md-3 v my-2" >
                            <div className="card shadow-sm w-100 courses" style={{ minHeight: '120px', borderRadius: '10px', border: '1px solid #99FFFF', boxShadow: '10px 10px 10px 2px rgba(34, 60, 80, 0.2)' }}>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <img src={item.src} style={{ width: '100px', height: '100px' }} />
                                        </div>
                                        <div className='col-md-8'>
                                            <p className="card-subtitle mb-2 text-meted" style={{ marginLeft: '4px' }}>
                                                {item.dir_name.substring(0, 25)}...</p>
                                            <p className='card-text' style={{ marginLeft: '4px' }}>Tinglovchilar:{item.countvotes}</p>
                                            <div className='star'>
                                                <AiFillStar style={{ color: '#f7c04d' }} />
                                                <AiFillStar style={{ color: '#f7c04d' }} />
                                                <AiFillStar style={{ color: '#f7c04d' }} />
                                                <AiFillStar style={{ color: '#f7c04d' }} />
                                                <AiOutlineStar />
                                            </div>
                                            {/* <p className='card-text'>{item.summvotes}</p> */}
                                            {/* <p className='card-text'>{item.cntlis}</p>
                                             <p className='card-text'>{item.up_date}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
            </div>

            <div className='container'>

                <h2 className='text-center'>MODULLAR</h2>
                <Swiper
                    // install Swiper modules
                    breakpoints={{
                        320: {
                            // width: 576,
                            slidesPerView: 1,
                        },
                        400: {
                            // width: 576,
                            slidesPerView: 1,
                        },
                        576: {
                            // width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 2,
                        },
                        992: {
                            // width: 768,
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ padding: '10px' }}
                >
                    {/* Modules */}
                    <div className="row m-2 p-4">

                        {modules.map((item) => {
                            return <SwiperSlide key={item.id} className="col-sm-6 col-md-3 v my-2">
                                <div style={{ marginBottom: '30px' }} >
                                    <div>

                                        <div className="card shadow-sm w-100" style={{ minHeight: '150px', maxHeight: "180", borderRadius: '15px' }}>
                                            <div className="card-body">
                                                <h5 className="card-title text-center h2"></h5>
                                                <img src={item.src} alt="" style={{ width: '100%', height: '200px' }} />
                                                <br />
                                                <span class="course-info-02__badge-text badge-beginner">Tayanch</span>
                                                <h6 className="card-subtitle mb-2 text-meted" style={{ marginTop: '20px' }}>{item.name.substring(0, 30)}...</h6>
                                                {/* <p className='card-text'>{item.lecturer}</p> */}
                                                <p className='card-text'>{item.note}</p>
                                                <p className='card-text'>{item.lectfio}</p>
                                                {/* <p className='card-text'>{item.selectedby}</p> */}
                                                <div className='course_info'>
                                                    <div>
                                                        <span style={{ fontWeight: '600' }}>4 </span>
                                                        <span>/5</span>
                                                        <div>
                                                            <AiFillStar style={{ color: '#f7c04d' }} />
                                                            <AiFillStar style={{ color: '#f7c04d' }} />
                                                            <AiFillStar style={{ color: '#f7c04d' }} />
                                                            <AiFillStar style={{ color: '#f7c04d' }} />
                                                            <AiOutlineStar />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span><RiUserLine /> 1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        })};

                    </div>
                </Swiper>
            </div>

            <Between />

            <div className='container'>
                {/* Webinars */}
                <div className="row m-2 p-4">

                    <h2 className='text-center'>WEBINAR</h2>
                    {webinars.map((item) => {
                        return <div key={item.id} className="col-sm-6 col-md-3 v my-2" data-aos="zoom-out-down" data-aos-duration="1500">
                            <div className="card shadow-sm w-100" style={{ height: '400px', borderRadius: '10px', boxShadow: '0 0 10px rgb(51 51 51 / 15%)' }}>
                                <div className="card-body">
                                    <img src={item.src} style={{ width: '100%', height: '200px' }} />
                                    <div style={{ minHeight: '100px', paddingTop: '6px' }}>
                                        <h5 className="card-title text-center h2"></h5>
                                        <h6 className="card-subtitle mb-2 text-meted text-center">{item.modul}</h6>
                                        <p className='card-text'>{item.name_report}</p>
                                        <p className='card-text'>{item.lecturer}</p>
                                    </div>
                                    <div className='star'>
                                        <AiFillStar style={{ color: '#f7c04d' }} />
                                        <AiFillStar style={{ color: '#f7c04d' }} />
                                        <AiFillStar style={{ color: '#f7c04d' }} />
                                        <AiFillStar style={{ color: '#f7c04d' }} />
                                        <AiOutlineStar />
                                    </div>
                                    {/* <p className='card-text'>{item.started_at}</p>
                                    <p className='card-text'>{item.created_at}</p>
                                    <p className='card-text'>{item.duration}</p>
                                    <p className='card-text'>{item.cabinet}</p>
                                    <p className='card-text'>{item.excabinet}</p>
                                    <p className='card-text'>{item.excabinfo}</p>
                                    <p className='card-text'>{item.record}</p>
                                    <p className='card-text'>{item.live}</p>
                                    <p className='card-text'>{item.alt}</p> */}

                                </div>
                            </div>
                        </div>;
                    })}
                </div>
            </div >

            <div class="testimonial-section bg-color-01 section-padding-01 scene" style={{ background: '#F4F9FF', width: '100%' }}>
                <div className='container'>
                    {/* Lectures */}
                    <div className="row m-2 p-4">
                        <h2 className='text-center'>MARUZACHILAR</h2>


                        <Swiper
                            // install Swiper modules
                            breakpoints={{
                                320: {
                                    // width: 576,
                                    slidesPerView: 1,
                                },
                                400: {
                                    // width: 576,
                                    slidesPerView: 1,
                                },
                                576: {
                                    // width: 576,
                                    slidesPerView: 1,
                                },
                                768: {
                                    // width: 768,
                                    slidesPerView: 2,
                                },
                                992: {
                                    // width: 768,
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {lecturers.map((item) => {
                                return <SwiperSlide key={item.id} className="col-sm-6 col-md-4 v my-2" >
                                    <div className="card shadow-sm w-100" style={{ minHeight: '225px', borderRadius: '10px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title text-center h2"></h5>
                                            {/* <img src={`${process.env.PUBLIC_URL}${item.src}`} style={{ width: 225 }} ></img> */}
                                            <div className='lecture'>
                                                <div>
                                                    <img src={item.src} alt="" style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                                                </div>
                                                <div className='lecture_text'>
                                                    <h6 className="card-subtitle mb-2 text-meted text-center">{item.fio}</h6>
                                                    <p className='card-text'>{item.rank}</p>
                                                    <p className='card-text'>{item.workplace.substring(0, 50)}...</p>
                                                    <p className='card-text'>{item.wp_info}</p>
                                                    <div>
                                                        <p className='card-text'><MdAlternateEmail /> {item.email}</p>
                                                        <p className='card-text'><FcCallback />  {item.contact}</p>
                                                    </div>
                                                    <p className='card-text'>{item.note}</p>
                                                    <p className='card-text'>{item.c_id}</p>
                                                </div>
                                            </div>

                                            {/* <p className='card-text'>{item.cntmodul}</p>
                    <p className='card-text'>{item.countvotes}</p> */}
                                            <p className='card-text'>{item.summvotes}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })};
                        </Swiper>
                    </div>
                </div>

                <div class="testimonial-section__shape-01" data-depth="-0.5"></div>
                <div class="testimonial-section__shape-02" data-depth="0.7"></div>
                <div class="testimonial-section__shape-03" data-depth="-0.5"></div>
                <img class="testimonial-section__shape-04" data-depth="0.7" src="assets/images/shape/edumall-shape-01.png" alt="Shape" width="179" height="178" />

            </div>


            {/* <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={fetchComments}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        /> */}
        </div >

    )

}

export default Api;

