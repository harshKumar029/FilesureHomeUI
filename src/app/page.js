"use client";
import Image from "next/image";
import Planet from '../../public/image/planet.svg';
import Rigtarrow from '../../public/image/rigtarrow.svg';
import frame1 from '../../public/image/indus_icons/Frame 2-1.svg';
import frame2 from '../../public/image/indus_icons/Frame 2-2.svg';
import frame3 from '../../public/image/indus_icons/Frame 2-3.svg';
import frame4 from '../../public/image/indus_icons/Frame 2-4.svg';
import frame5 from '../../public/image/indus_icons/Frame 2-5.svg';
import frame6 from '../../public/image/indus_icons/Frame 2-6.svg';
import frame7 from '../../public/image/indus_icons/Frame 2-7.svg';
import frame8 from '../../public/image/indus_icons/Frame 2-8.svg';
import frame9 from '../../public/image/indus_icons/Frame 2-9.svg';
import frame10 from '../../public/image/indus_icons/Frame 2-10.svg';
import frame11 from '../../public/image/indus_icons/Frame 2-11.svg';
import frame12 from '../../public/image/indus_icons/Frame 2-12.svg';
import frame13 from '../../public/image/indus_icons/Frame 2-13.svg';
import frame14 from '../../public/image/indus_icons/Frame 2-14.svg';
import frame15 from '../../public/image/indus_icons/Frame 2.svg';
import ios from '../../public/image/indus_icons/ios.svg';
import play from '../../public/image/indus_icons/play.svg';
import realestate from '../../public/image/indus_icons/realestate.svg';
import loaction from '../../public/image/indus_icons/loaction.svg';
import imagephone from '../../public/image/indus_icons/imagephone.svg';

import one from '../../public/image/indus_icons/1.svg';
import two from '../../public/image/indus_icons/2.svg';
import three from '../../public/image/indus_icons/3.svg';
import four from '../../public/image/indus_icons/4.svg';
import five from '../../public/image/indus_icons/5.svg';
import six from '../../public/image/indus_icons/6.svg';
import hopegift from '../../public/image/indus_icons/hopegif1.svg';

import application from '../../public/image/appicon/application.svg';
import coding from '../../public/image/appicon/coding.svg';
import graphic from '../../public/image/appicon/graphic.svg';
import hosting from '../../public/image/appicon/hosting.svg';
import planing from '../../public/image/appicon/planing.svg';
import security from '../../public/image/appicon/security.svg';

import framerightimg from '../../public/image/indus_icons/framerigh.svg';
import mycomplogo from '../../public/image/indus_icons/mycomplogo.svg';

import document from '../../public/image/footer/document.svg';
import mail from '../../public/image/footer/mail.svg';
import place from '../../public/image/footer/place.svg';
import smartphone from '../../public/image/footer/smartphone.svg';

import Group from '../../public/image/heroicon/Group.svg';
import india from '../../public/image/heroicon/india.svg';
import logo from '../../public/image/heroicon/logo.svg';
import mailhero from '../../public/image/heroicon/mail.svg';
import smartphoneimg from '../../public/image/heroicon/smartphone.svg';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>

      <nav className="fixed top-6 flex justify-between h-[92px] w-[85%]  mx-[7%] bg-white rounded-xl drop-shadow-md z-20">
        <Image
          className="items-center ml-4"
          src={logo}
          width={170}
          height={100}
          alt="logo"
        />
        
        <div className="hidden lg-1082:flex mr-24 navlinks h-full">
          <ul className="flex items-center space-x-4 h-full text-[#101828] font-roboto font-medium text-sm">
            <li>Services</li>
            <li>Media</li>
            <li>Cases</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </div>
        
        <div className="hidden lg-1082:flex navContacts mr-5 flex h-full font-roboto font-medium text-sm">
          <div className="flex items-center">
            <Image
              className="mr-2"
              src={smartphoneimg}
              width={24}
              height={24}
              alt="phone"
            />
            <div className="text-[#80A948]">+91 00000000</div>
          </div>
          <div className="ml-10 flex items-center">
            <Image
              className="mr-2"
              src={mailhero}
              width={24}
              height={24}
              alt="email"
            />
            <div className="text-[#80A948]">demo@gmail.com</div>
          </div>
        </div>
        <button
          className="lg-1082:hidden flex items-center px-4 py-2 text-[#101828] font-roboto font-medium"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

        </button>
        {isMenuOpen && (
          <div className="lg-1082:hidden fixed top-[80px] left-0 w-full bg-white rounded-b-md drop-shadow-md z-30">
            <ul className="flex flex-col items-center space-y-4 p-4 text-[#101828] font-roboto font-medium text-sm">
              <li>Services</li>
              <li>Media</li>
              <li>Cases</li>
              <li>FAQ</li>
              <li>Contacts</li>
            </ul>
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center mb-4">
                <Image
                  className="mr-2"
                  src={smartphoneimg}
                  width={24}
                  height={24}
                  alt="phone"
                />
                <div className="text-[#80A948]">+91 00000000</div>
              </div>
              <div className="flex items-center">
                <Image
                  className="mr-2"
                  src={mailhero}
                  width={24}
                  height={24}
                  alt="email"
                />
                <div className="text-[#80A948]">demo@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className=" bg-slate-100 pt-24 pb-8">
        <div className="heroSection w-[85%] mx-auto mt-16 ">

          <div className="largeImage absolute top-0 right-0  hidden imagecustom-lg:block">
            <Image
              className=""
              src={Group}
              height={750}
              width={670}
              alt="smartPhone"
            />
          </div>
          <div className=" m-auto imagecustom-lg:w-auto imagecustom-lg:m-4">
            <h2 className="  font-inter font-semibold text-4xl tracking-wide">
              <span className="font-extrabold text-[#FFBA00]">User-Centric Excellence:</span> Our<br /> <span className="font-bold">App Development services </span><br />Tackles Your Pain Points
            </h2>
            <p className="font-roboto font-medium mt-4 tracking-tight text-lg ">
              Experience a Seamless Digital Journey with<span className="font-extrabold text-[#80A948]"> Desun</span> - Where Every Line<br /> of Code Resolves Your Challenges and <span className="font-extrabold text-[#FFBA00]">Elevates Your App Experience</span><br /> to Unparalleled Heights.
            </p>

            <Card className=" mt-16 md:inline-flex block">
              <div className="">
                <CardHeader>
                  <CardTitle className=" font-inter font-bold text-xl leading-6">Leave your contacts and we will call you back<br />
                    within 30 minutes</CardTitle>
                </CardHeader>
                <div className="">
                  <div className="flex flex-col gap-5 px-6 sm:flex-row sm:gap-8">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input className="border-0 border-b-2 px-0 w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name" placeholder="My Name" />
                    </div>
                    <div >
                      <Label htmlFor="name">Phone number</Label>
                      {/* <div className="flex"> */}
                      <div className="absolute">
                        <Image
                          className="relative top-2.5 left-1"
                          src={india}
                          height={15}
                          width={15}
                          alt="flag"
                        />
                      </div>

                      <Input className="border-0 border-b-2 px-0 pl-7 w-56 " onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="name" placeholder="+91 0000000000" />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 px-6 sm:flex-row sm:gap-8 mb-6 mt-5">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input className="border-0 border-b-2 px-0 w-56"  onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name"  placeholder="My Name" />
                    </div>
                    <div>
                      <Label htmlFor="name">Phone number</Label>
                      <Input className="border-0 border-b-2 px-0 w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="name" placeholder="+91 0000000000" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="rightarea flex items-end justify-center">
                <Button variant="default" className="bg-[#80A948] mr-6 mb-6 text-sm font-roboto font-semibold px-16 md:p-7">
                  <span className="block md:hidden">Get consultation</span>
                  <span className="hidden md:block">Get<br />consultation</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>

      </div>

      <div className="md:max-w-[95%] mx-auto">
        <div className="flex flex-wrap justify-around py-12 my-5 border-x-0 border-[#D8D8D8] border-[2px]">
          <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
          <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
          <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
          <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
          <Image className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64" src={Planet} alt="Picture of the author" />
        </div>

        <div className="flex flex-col lg:flex-row mt-8 max-w-[80%] justify-around">
          <div className="lg:max-w-[50%] mb-8 lg:mb-0">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Full development cycle</h1>
            <p className="font-medium text-sm mt-8">We use proven technologies</p>
            <h3 className="font-semibold text-lg md:text-xl mt-8">web</h3>
            <p className="font-normal text-sm md:text-lg mt-4 md:mt-10">
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js <br /> / Nuxt / MySQL / Laravel / GO lang / django / Python
            </p>
            <h3 className="font-semibold text-lg md:text-xl mt-8">Mobile</h3>
            <p className="font-normal text-sm md:text-lg mt-4 md:mt-10">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
          <div className="space-y-6">
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">iOS development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="iOS development arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Android development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Android development arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Web development </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Web development arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">UI/UX design </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="UI/UX design arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Testing </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Testing arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">Launch </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="Launch arrow" /></span></p>
            <p className="flex items-center"><span className="cursor-pointer text-lg md:text-xl border-b-2 border-transparent hover:border-[#80A948] hover:font-semibold transition-all duration-100">IT consulting </span><span><Image className="ml-3 w-[8px]" src={Rigtarrow} alt="IT consulting arrow" /></span></p>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f4f7] py-20">
        <div className="flex flex-col mt-8 max-w-[84%] mx-auto">
          <h1 className="mb-10 font-bold text-2xl md:text-3xl lg:text-4xl ">
            Developed more than <span className="text-[#80A948]">100</span> <br className="hidden lg:block" /> projects in <span className="text-[#80A948]">15</span> industries
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-[80%] ">
            <div className="space-y-4">
              <p className="flex items-center"><Image src={frame15} alt="img" /><span className="ml-2 font-medium text-lg">Social media</span></p>
              <p className="flex items-center"><Image src={frame1} alt="img" /><span className="ml-2 font-medium text-lg">Fitness and sport</span></p>
              <p className="flex items-center"><Image src={frame2} alt="img" /><span className="ml-2 font-medium text-lg">Bank</span></p>
              <p className="flex items-center"><Image src={frame3} alt="img" /><span className="ml-2 font-medium text-lg">Construction</span></p>
              <p className="flex items-center"><Image src={frame4} alt="img" /><span className="ml-2 font-medium text-lg">Game projects</span></p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center"><Image src={frame5} alt="img" /><span className="ml-2 font-medium text-lg">Education</span></p>
              <p className="flex items-center"><Image src={frame6} alt="img" /><span className="ml-2 font-medium text-lg">Auto, transport</span></p>
              <p className="flex items-center"><Image src={frame7} alt="img" /><span className="ml-2 font-medium text-lg">Medicine, health</span></p>
              <p className="flex items-center"><Image src={frame8} alt="img" /><span className="ml-2 font-medium text-lg">Restaurants, food delivery</span></p>
              <p className="flex items-center"><Image src={frame9} alt="img" /><span className="ml-2 font-medium text-lg">Marketplace</span></p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center"><Image src={frame10} alt="img" /><span className="ml-2 font-medium text-lg">AR technology</span></p>
              <p className="flex items-center"><Image src={frame11} alt="img" /><span className="ml-2 font-medium text-lg">TV series</span></p>
              <p className="flex items-center"><Image src={frame12} alt="img" /><span className="ml-2 font-medium text-lg">Startups</span></p>
              <p className="flex items-center"><Image src={frame13} alt="img" /><span className="ml-2 font-medium text-lg">Religion</span></p>
              <p className="flex items-center"><Image src={frame14} alt="img" /><span className="ml-2 font-medium text-lg">Online courses</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between">
        <div className="lg:max-w-[50%]">
          <h1 className="font-bold text-2xl md:text-4xl">Projects we are proud of</h1>
          <p className="font-medium text-sm mt-4 md:mt-8">
            Our software development company is truly proud of the wonderful clients we have
            <br className="hidden md:block" /> worked with. We enjoy a long-term partnership.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 mt-8 md:mt-[70px]">
            {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, index) => (
              <p
                key={index}
                className="cursor-pointer font-medium text-lg text-[#1D2939] border-b-2 border-transparent hover:border-[#ffba00] hover:text-[#101828] transition-all duration-100"
              >
                {project}
              </p>
            ))}
          </div>
          <h1 className="font-bold text-2xl md:text-4xl mt-8 md:mt-16">Project 1</h1>
          <p className="font-medium text-sm mt-4 md:mt-8">
            Crafted an innovative rental property management app, seamlessly integrating secure login, absence
            registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.
          </p>
          <p className="mt-4 md:mt-10">
            Business analysis <span className="text-[#ffba00]">/</span> iOS <span className="text-[#ffba00]">/</span> Android <span className="text-[#ffba00]">/</span> QA <span className="text-[#ffba00]">/</span> UI/UX Design
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-8">
            <p className="flex items-center"><Image src={loaction} alt="img" />india</p>
            <p className="flex items-center"><Image src={realestate} alt="img" />Real Estate</p>
          </div>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-10">
            <div>
              <p className="font-bold text-xl md:text-2xl text-[#101828]">400%</p>
              <p className="font-normal text-sm text-[#667085]">User Growth</p>
            </div>
            <div>
              <p className="font-bold text-xl md:text-2xl text-[#101828]">+ 200 000</p>
              <p className="font-normal text-sm text-[#667085]">Active Users</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-10">
            <Image src={ios} alt="img" />
            <Image src={play} alt="img" />
          </div>
        </div>
        <div className="mt-8 lg:mt-auto flex justify-center lg:justify-start">
          <Image src={imagephone} alt="img" className="max-w-full" />
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(90deg, rgba(250,188,31,1) 23%, rgba(124,165,70,1) 83%)',
      }}>
        <div className="flex flex-col md:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-bold text-2xl md:text-4xl text-white">Let's discuss <br />
              Your project</h1>
            <p className="font-medium text-sm md:text-base mt-4 text-white">Let's figure out how to create an effective application,<br />
              its cost and terms of its development</p>
          </div>
          <div className="w-full md:w-auto">
            <Card className="p-4 flex flex-col justify-between">
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <Label htmlFor="name">Full Name</Label>
                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} id="name" placeholder="My Name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <div className="absolute top-2.5 left-1">
                        <Image
                          src={india}
                          height={15}
                          width={15}
                          alt="flag"
                        />
                      </div>
                      <Input className="border-0 border-b-2 px-0 pl-7 w-full md:w-56" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '')} id="phone" placeholder="+91 0000000000" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mb-6 mt-5">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" id="businessName" onChange={(e) => e.target.value = e.target.value.replace(/[^A-Za-z]/g, '')} placeholder="ABC Technologies PVT LTD" />
                  </div>
                  <div>
                    <Label htmlFor="businessEmail">Business mail</Label>
                    <Input className="border-0 border-b-2 px-0 w-full md:w-56" id="businessEmail" placeholder="example@company.com" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="default" className="bg-[#FFB900] text-white text-sm font-roboto font-semibold p-4 px-6 md:p-5 md:px-8">Discuss the project</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>


      <div className="mt-8 py-20 max-w-[84%] mx-auto justify-between">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-9 text-center md:text-left">Application Development Stages</h1>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="space-y-6 mb-6 md:mb-0">
            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={planing} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Analysis</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={graphic} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Design</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={coding} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Development</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-0 mx-auto md:mx-0">
            <Image className="max-w-full" src={hopegift} alt="img" />
          </div>

          <div className="space-y-6">
            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={security} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Testing</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={hosting} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Launching</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[392px] h-auto border-2 rounded-lg shadow-lg">
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-5">
                  <Image className="w-8 sm:w-10" src={application} alt="img" />
                  <p className="ml-2 sm:ml-4 font-semibold text-lg sm:text-xl text-[#101828]">Support</p>
                </div>
                <p className="font-normal text-sm sm:text-base text-[#101828]">
                  We craft precise technical specs, aligning with your business, technology, and user requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F4F7]">
        <div className="flex flex-col lg:flex-row mt-8 py-20 max-w-[84%] mx-auto justify-between">
          <div className="lg:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl mb-6 lg:mb-9">Our team</h1>
            <p className="font-medium text-sm mt-4 md:mt-8">
              Thousand is a full-cycle digital production company with its own product analytics,
              <br className="hidden md:block" /> design, web, and mobile development.
            </p>
            <div className="flex flex-wrap mt-10 gap-8 md:gap-16 mb-10">
              <div>
                <p className="font-bold text-3xl md:text-5xl text-[#101828]">28</p>
                <p className="font-medium text-base text-[#667085]">team members</p>
              </div>
              <div>
                <p className="font-bold text-3xl md:text-5xl text-[#101828]">+100</p>
                <p className="font-medium text-base text-[#667085]">projects</p>
              </div>
              <div>
                <p className="font-bold text-3xl md:text-5xl text-[#101828]">7 years</p>
                <p className="font-medium text-base text-[#667085]">in IT sphere</p>
              </div>
            </div>
            <p className="font-medium text-sm mt-4 md:mt-8">
              All the necessary specialists - from a designer to a tester - are on our staff. We hire
              <br className="hidden md:block" /> the best specialists in the market. It's expensive but worth it.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <Image className="max-w-full h-auto" src={framerightimg} alt="Our team image" />
          </div>
        </div>
      </div>

      <div className="mt-8 mb-5 rounded-lg py-10 max-w-[84%] mx-auto bg-[#111111] text-center">
        <Image className="mb-11 mx-auto" src={mycomplogo} alt="Company Logo" />
        <div className="flex flex-col sm:flex-row justify-around">
          <div className="mb-6 sm:mb-0">
            <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
              <Image className="mr-2" src={smartphone} alt="Phone" /> Contact nums
            </p>
            <p className="text-white font-semibold text-base mt-2">+91 1000000000</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
              <Image className="mr-2" src={mail} alt="Mail" /> Gmail
            </p>
            <p className="text-white font-semibold text-base mt-2">demo@gmail.com</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
              <Image className="mr-2" src={place} alt="Address" /> Address
            </p>
            <p className="text-white font-semibold text-base mt-2">New Delhi, India</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <p className="text-[#98A2B3] flex font-medium text-sm items-center justify-center sm:justify-start">
              <Image className="mr-2" src={document} alt="Request" /> Leave a request
            </p>
            <p className="text-white font-semibold text-base mt-2">Leave a request</p>
          </div>
        </div>
        <p className="text-white mt-10 font-normal text-[.9rem]">We work throughout the world</p>
      </div>
    </div>
  );
}
