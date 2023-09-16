import React, {  useState} from 'react';


import {odtuErkekler,odtuKizlar}from 'assets/odtu.jsx';

const OdtuYurtSonucRobotu = () => {
  const [userOutput, setUserOutput] = useState('');
  const [userGender, setUserGender] = useState('female');
  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setUserGender(selectedGender);
  };


  const extractInfo = (point) => {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = userGender === 'female' ? odtuKizlar : odtuErkekler;
      console.log(tempElement)

      // Access and manipulate the DOM within the temporary element
      const trElements = tempElement.getElementsByTagName("tr");
      let totalCount = 0;

      for (let i = 0; i < trElements.length; i++) {
        const tdElements = trElements[i].getElementsByTagName("td");
        if (tdElements.length > 3) {
          const fourthTdValue = parseInt(tdElements[3].textContent, 10);
          if (fourthTdValue >= point) {
            totalCount++;
          }
        }
      }
      const erkekCikan = 317
      const kizCikan = 208
      let x = totalCount - (userGender === 'female' ? kizCikan : erkekCikan);
      
      if (x <= 0) {
        x = "You already have a dormitory in METU!"
        return x
      };
      return "According to the METU dormitory result list, there are " + x + " people ahead of you." 
  };

  
  const handleInput = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputValue = event.target.querySelector('input[type="number"]').value;
    setUserOutput(extractInfo(parseInt(inputValue, 10)));
  };
  
    return (
        <>
        <form onSubmit={handleInput} className='form-container'>
            
            <img alt='metu logo' className='metu_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_of_METU.svg/942px-Logo_of_METU.svg.png' width={100} height={100}></img>
            <div className='intro_message'>
Hey, welcome to this website.<br/>By entering your dormitory score,<br/> you can see how many people are ahead of you <br/>on the METU 2023 dormitory results list. </div>

            <select className='gender' onChange={handleGenderChange}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <input
              type="number"
              className='input'
              min={1}
              max={200}
              placeholder='Enter your dormitory score'
              required
            />
            <button className='bar_card bar_card_1' type='submit'>submit</button>
            <div className='user_output'>{ userOutput } </div>
            <div className='warning'>All the data used was obtained from sonuc-aciklama.metu.edu.tr </div>
        </form>

        </>
    );
};

export default OdtuYurtSonucRobotu;

