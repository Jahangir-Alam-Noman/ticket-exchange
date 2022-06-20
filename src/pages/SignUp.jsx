/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";
import LeftMenu from "../components/Home/LeftMenu/LeftMenu";
import image from "../assets/img/category/category_347.jpg";

const SignUp = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='container ticket p-4 text-start'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 '>
            <LeftMenu></LeftMenu>
          </div>
          <div className='col-xs-12 container col-sm-8 col-md-8 col-lg-8'>
            <div className='row sign_up'>
              <p className='h3 signUp_head'>
                SIGN UP - Buy & Sell Tickets at TheTicket.Exchange
              </p>
              <div id='emailHelp' class='form-text text-end text-dark'>
                Already Registered ? <Link to='/signin'> (Sign In)</Link>
              </div>

              <div class='col'>
                <form>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your First Name
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='First Name'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-user input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Address
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Address Line 1'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-calculator input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your City / Town
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Town/City'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-map-marker input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Zip / Post Code
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Zip / Post Code'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-thumb-tack input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Cell/ Mobile Number
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Mobile / Cell Number +1-234-567-1234'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-mobile input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Email Address
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Email Address'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-envelope input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <div class='input-group mb-3'>
                    <small className='fw-bolder'>
                      Are you Human? Please Enter CAPTCHA Code on Image
                    </small>
                    <img src={image} alt='' height='100' width='200' />
                  </div>

                  <div class='mb-3 form-check'>
                    <input
                      type='checkbox'
                      class='form-check-input'
                      id='exampleCheck1'
                    />
                    <label class='form-check-label ' for='exampleCheck1'>
                      <span className='fw-bold'>
                        {" "}
                        I agree with TheTicket.Exchange's
                      </span>{" "}
                      <span className='text-dark'>Terms and Conditions</span>
                    </label>
                  </div>
                </form>
              </div>
              <div class='col'>
                <form>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Last Name
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Last Name'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-user input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Address
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Address Line 2 (Optional)'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-calculator input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your State / Region
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Region/State'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-flag input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your Country
                  </label>

                  <div class='input-group mb-3'>
                    <select
                      name='BCountryId'
                      id='BCountryId'
                      class='form-control form-select'>
                      <option value='1'>Afghanistan</option>
                      <option value='2'>Albania</option>
                      <option value='3'>Algeria</option>
                      <option value='4'>American Samoa</option>
                      <option value='5'>Andorra</option>
                      <option value='6'>Angola</option>
                      <option value='7'>Anguilla</option>
                      <option value='8'>Antarctica</option>
                      <option value='9'>Antigua and Barbuda</option>
                      <option value='10'>Argentina</option>
                      <option value='11'>Armenia</option>
                      <option value='12'>Aruba</option>
                      <option value='13'>Australia</option>
                      <option value='14'>Austria</option>
                      <option value='15'>Azerbaijan</option>
                      <option value='16'>Bahamas</option>
                      <option value='17'>Bahrain</option>
                      <option value='18'>Bangladesh</option>
                      <option value='19'>Barbados</option>
                      <option value='20'>Belarus</option>
                      <option value='21'>Belgium</option>
                      <option value='22'>Belize</option>
                      <option value='23'>Benin</option>
                      <option value='24'>Bermuda</option>
                      <option value='25'>Bhutan</option>
                      <option value='26'>Bolivia</option>
                      <option value='27'>Bosnia and Herzegowina</option>
                      <option value='28'>Botswana</option>
                      <option value='29'>Bouvet Island</option>
                      <option value='30'>Brazil</option>
                      <option value='31'>British Indian Ocean Territory</option>
                      <option value='32'>Brunei Darussalam</option>
                      <option value='33'>Bulgaria</option>
                      <option value='34'>Burkina Faso</option>
                      <option value='35'>Burundi</option>
                      <option value='36'>Cambodia</option>
                      <option value='37'>Cameroon</option>
                      <option value='38'>Canada</option>
                      <option value='39'>Cape Verde</option>
                      <option value='40'>Cayman Islands</option>
                      <option value='41'>Central African Republic</option>
                      <option value='42'>Chad</option>
                      <option value='43'>Chile</option>
                      <option value='44'>China</option>
                      <option value='45'>Christmas Island</option>
                      <option value='46'>Cocos (Keeling) Islands</option>
                      <option value='47'>Colombia</option>
                      <option value='48'>Comoros</option>
                      <option value='49'>Congo</option>
                      <option value='50'>Cook Islands</option>
                      <option value='51'>Costa Rica</option>
                      <option value='52'>Cote D'Ivoire</option>
                      <option value='53'>Croatia</option>
                      <option value='54'>Cuba</option>
                      <option value='55'>Cyprus</option>
                      <option value='56'>Czech Republic</option>
                      <option value='57'>Denmark</option>
                      <option value='58'>Djibouti</option>
                      <option value='59'>Dominica</option>
                      <option value='60'>Dominican Republic</option>
                      <option value='61'>East Timor</option>
                      <option value='62'>Ecuador</option>
                      <option value='63'>Egypt</option>
                      <option value='64'>El Salvador</option>
                      <option value='65'>Equatorial Guinea</option>
                      <option value='66'>Eritrea</option>
                      <option value='67'>Estonia</option>
                      <option value='68'>Ethiopia</option>
                      <option value='69'>Falkland Islands (Malvinas)</option>
                      <option value='70'>Faroe Islands</option>
                      <option value='71'>Fiji</option>
                      <option value='72'>Finland</option>
                      <option value='73'>France</option>
                      <option value='74'>France, Metropolitan</option>
                      <option value='75'>French Guiana</option>
                      <option value='76'>French Polynesia</option>
                      <option value='77'>French Southern Territories</option>
                      <option value='78'>Gabon</option>
                      <option value='79'>Gambia</option>
                      <option value='80'>Georgia</option>
                      <option value='81'>Germany</option>
                      <option value='82'>Ghana</option>
                      <option value='83'>Gibraltar</option>
                      <option value='84'>Greece</option>
                      <option value='85'>Greenland</option>
                      <option value='86'>Grenada</option>
                      <option value='87'>Guadeloupe</option>
                      <option value='88'>Guam</option>
                      <option value='89'>Guatemala</option>
                      <option value='90'>Guinea</option>
                      <option value='91'>Guinea-bissau</option>
                      <option value='92'>Guyana</option>
                      <option value='93'>Haiti</option>
                      <option value='94'>Heard and Mc Donald Islands</option>
                      <option value='95'>Honduras</option>
                      <option value='96'>Hong Kong</option>
                      <option value='97'>Hungary</option>
                      <option value='98'>Iceland</option>
                      <option value='99'>India</option>
                      <option value='100'>Indonesia</option>
                      <option value='101'>Iran (Islamic Republic of)</option>
                      <option value='102'>Iraq</option>
                      <option value='103'>Ireland</option>
                      <option value='104'>Israel</option>
                      <option value='105'>Italy</option>
                      <option value='106'>Jamaica</option>
                      <option value='107'>Japan</option>
                      <option value='108'>Jordan</option>
                      <option value='109'>Kazakhstan</option>
                      <option value='110'>Kenya</option>
                      <option value='111'>Kiribati</option>
                      <option value='112'>
                        Korea, Democratic People's Republic of
                      </option>
                      <option value='113'>Korea, Republic of</option>
                      <option value='114'>Kuwait</option>
                      <option value='115'>Kyrgyzstan</option>
                      <option value='116'>
                        Lao People's Democratic Republic
                      </option>
                      <option value='117'>Latvia</option>
                      <option value='118'>Lebanon</option>
                      <option value='119'>Lesotho</option>
                      <option value='120'>Liberia</option>
                      <option value='121'>Libyan Arab Jamahiriya</option>
                      <option value='122'>Liechtenstein</option>
                      <option value='123'>Lithuania</option>
                      <option value='124'>Luxembourg</option>
                      <option value='125'>Macau</option>
                      <option value='126'>
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value='127'>Madagascar</option>
                      <option value='128'>Malawi</option>
                      <option value='129'>Malaysia</option>
                      <option value='130'>Maldives</option>
                      <option value='131'>Mali</option>
                      <option value='132'>Malta</option>
                      <option value='133'>Marshall Islands</option>
                      <option value='134'>Martinique</option>
                      <option value='135'>Mauritania</option>
                      <option value='136'>Mauritius</option>
                      <option value='137'>Mayotte</option>
                      <option value='138'>Mexico</option>
                      <option value='139'>
                        Micronesia, Federated States of
                      </option>
                      <option value='140'>Moldova, Republic of</option>
                      <option value='141'>Monaco</option>
                      <option value='142'>Mongolia</option>
                      <option value='241'>
                        Montenegro (Republic of Montenegro)
                      </option>
                      <option value='143'>Montserrat</option>
                      <option value='144'>Morocco</option>
                      <option value='145'>Mozambique</option>
                      <option value='146'>Myanmar</option>
                      <option value='147'>Namibia</option>
                      <option value='148'>Nauru</option>
                      <option value='149'>Nepal</option>
                      <option value='150'>Netherlands</option>
                      <option value='151'>Netherlands Antilles</option>
                      <option value='152'>New Caledonia</option>
                      <option value='153'>New Zealand</option>
                      <option value='154'>Nicaragua</option>
                      <option value='155'>Niger</option>
                      <option value='156'>Nigeria</option>
                      <option value='157'>Niue</option>
                      <option value='158'>Norfolk Island</option>
                      <option value='159'>Northern Mariana Islands</option>
                      <option value='160'>Norway</option>
                      <option value='161'>Oman</option>
                      <option value='162'>Pakistan</option>
                      <option value='163'>Palau</option>
                      <option value='164'>Panama</option>
                      <option value='165'>Papua New Guinea</option>
                      <option value='166'>Paraguay</option>
                      <option value='167'>Peru</option>
                      <option value='168'>Philippines</option>
                      <option value='169'>Pitcairn</option>
                      <option value='170'>Poland</option>
                      <option value='171'>Portugal</option>
                      <option value='172'>Puerto Rico</option>
                      <option value='173'>Qatar</option>
                      <option value='174'>Reunion</option>
                      <option value='175'>Romania</option>
                      <option value='176'>Russia</option>
                      <option value='177'>Rwanda</option>
                      <option value='178'>Saint Kitts and Nevis</option>
                      <option value='179'>Saint Lucia</option>
                      <option value='180'>
                        Saint Vincent and the Grenadines
                      </option>
                      <option value='181'>Samoa</option>
                      <option value='182'>San Marino</option>
                      <option value='183'>Sao Tome and Principe</option>
                      <option value='184'>Saudi Arabia</option>
                      <option value='185'>Senegal</option>
                      <option value='240'>Serbia (Republic of Serbia)</option>
                      <option value='236'>
                        Serbia and Montenegro (Yugoslavia)
                      </option>
                      <option value='186'>Seychelles</option>
                      <option value='187'>Sierra Leone</option>
                      <option value='188'>Singapore</option>
                      <option value='189'>Slovakia (Slovak Republic)</option>
                      <option value='190'>Slovenia</option>
                      <option value='191'>Solomon Islands</option>
                      <option value='192'>Somalia</option>
                      <option value='193'>South Africa</option>
                      <option value='194'>
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value='195'>Spain</option>
                      <option value='196'>Sri Lanka</option>
                      <option value='197'>St. Helena</option>
                      <option value='198'>St. Pierre and Miquelon</option>
                      <option value='199'>Sudan</option>
                      <option value='200'>Suriname</option>
                      <option value='201'>
                        Svalbard and Jan Mayen Islands
                      </option>
                      <option value='202'>Swaziland</option>
                      <option value='203'>Sweden</option>
                      <option value='204'>Switzerland</option>
                      <option value='205'>Syrian Arab Republic</option>
                      <option value='206'>Taiwan</option>
                      <option value='207'>Tajikistan</option>
                      <option value='208'>Tanzania, United Republic of</option>
                      <option value='209'>Thailand</option>
                      <option value='210'>Togo</option>
                      <option value='211'>Tokelau</option>
                      <option value='212'>Tonga</option>
                      <option value='213'>Trinidad and Tobago</option>
                      <option value='214'>Tunisia</option>
                      <option value='215'>Turkey</option>
                      <option value='216'>Turkmenistan</option>
                      <option value='217'>Turks and Caicos Islands</option>
                      <option value='218'>Tuvalu</option>
                      <option value='219'>Uganda</option>
                      <option value='220'>Ukraine</option>
                      <option value='221'>United Arab Emirates</option>
                      <option value='222'>United Kingdom</option>
                      <option value='223' selected='' class='selected-option'>
                        United States
                      </option>
                      <option value='224'>
                        United States Minor Outlying Islands
                      </option>
                      <option value='225'>Uruguay</option>
                      <option value='226'>Uzbekistan</option>
                      <option value='227'>Vanuatu</option>
                      <option value='228'>Vatican City State (Holy See)</option>
                      <option value='229'>Venezuela</option>
                      <option value='230'>Viet Nam</option>
                      <option value='231'>Virgin Islands (British)</option>
                      <option value='232'>Virgin Islands (U.S.)</option>
                      <option value='233'>Wallis and Futuna Islands</option>
                      <option value='234'>Western Sahara</option>
                      <option value='235'>Yemen</option>
                      <option value='237'>Zaire</option>
                      <option value='238'>Zambia</option>
                      <option value='239'>Zimbabwe</option>
                    </select>

                    <i
                      class='fa fa-globe input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Your LandLine / Other Number
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Alternative/Land-Line Number +1-234-567-1234'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-phone input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <label for='basic-url' class='form-label fw-bolder'>
                    Confirm Your Email Address
                  </label>

                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Re-Enter Email Address'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                    <i
                      class='fa fa-envelope input-group-text'
                      aria-hidden='true'
                      id='basic-addon2'></i>
                  </div>
                  <div class='input-group mb-3'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Enter Captcha'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                    />
                  </div>
                </form>
              </div>
              <div className='row'>
                <div className='col-sm-3 offset-sm-5'>
                  <button type='submit' class='btn sign_btn text-white fw-bold'>
                    Sign Me Up!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
