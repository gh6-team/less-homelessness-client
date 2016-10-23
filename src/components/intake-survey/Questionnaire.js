import React from 'react';
import QuestionList from './QuestionList';
import QuestionItem from './QuestionItem';

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };

    this.question_list = [
      {
        question: "What is the total length of time you have lived on the streets or in shelters?",
        type: "text"
      },
      {
        question: "In the past three years, how many times have you been housed and then homeless again?",
        type: "text"
      },
      {
        question: "In the past six months, how many times have you been to the emergency department/room?",
        type: "text"
      },
      {
        question: "In the past six months, how many times have you had an interaction with the police?",
        type: "text"
      },
      {
        question: "In the past six months, how many times have you been taken to the hospital in an ambulance?",
        type: "text"
      },
      {
        question: "In the past six months, how many times have you used a crisis service, including distress centers or suicide prevention hotlines?",
        type: "text"
      },
      {
        question: "In the past six months, how many times have you been hospitalized as an in-patient, including hospitalizations in a mental health hospital?",
        type: "text"
      },
      {
        question: "Have you been attacked or beaten up since becoming homeless?",
        type: "YN"
      },
      {
        question: "Have you threatened to or tried to harm yourself or anyone else in the last year?",
        type: "YN"
      },
      {
        question: "Do you have any legal stuff going on right that may result in you being locked up or having to pay fines?",
        type: "YN"
      },
      {
        question: "Does anybody force or trick you to do things that you do not want to do?",
        type: "YN"
      },
      {
        question: "Ever do things that may be considered to be risky like exchange sex for money, run drugs for someone, have unprotected sex with someone you don’t really know, share a needle, or anything like that?",
        type: "YN"
      },
      {
        question: "In which of the following do you normally sleep?",
        type: "list",
        options: [
          {place: "Shelter"},
          {place: "Street, Sidewalk or Doorway"},
          {place: "Car, Van or RV"},
          {place: "Bus or Subway"},
          {place: "Beach, Riverbed or Park"},
          {place: "Other (specify)"}
        ]
      },
      {
        question: "Is there anybody that thinks you owe them money?",
        type: "YN"
      },
      {
        question: "Do you have any money coming in on a regular basis, like a job or government benefit or even working under the table, binning or bottle collecting, sex work, odd jobs, day labor, or anything like that?",
        type: "YN"
      },
      {
        question: "Do you have enough money to meet all of your expenses on a monthly basis?",
        type: "YN"
      },
      {
        question: "Do you have planned activities each day other than just surviving that bring you happiness and fulfillment?",
        type: "YN"
      },
      {
        question: "Do you have any friends, family or other people in your life out of convenience or necessity, but you do not like their company?",
        type: "YN"
      },
      {
        question: "Do any friends, family or other people in your life ever take your money, borrow cigarettes, use your drugs, drink your alcohol, or get you to do things you really don’t want to do?",
        type: "YN"
      },
      {
        question: "Surveyor, do you detect signs of poor hygiene or daily living skills?",
        type: "private_YN"
      },
      {
        question: "Where do you usually go for healthcare or when you’re not feeling well?",
        type: "list",
        options: [
          {place: "Hospital"},
          {place: "Clinic"},
          {place: "VA"},
          {place: "Other (specify)"},
          {place: "Does not go for care"}
        ]
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Kidney disease/End Stage Renal Disease or Dialysis",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "History of frostbite, Hypothermia, or Immersion Foot",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Liver disease, Cirrhosis, or End-­‐Stage Liver Disease",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "HIV+/AIDS",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "History of Heat Stroke/Heat Exhaustion",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Heart disease, Arrhythmia, or Irregular Heartbeat",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Emphysema",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Diabetes",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Asthma",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Cancer",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Hepatitis C",
        type: "YN"
      },
      {
        pre_q: "Do you have now, have you ever had, or has a healthcare provider ever told you that you have the following medical condition:",
        question: "Tuberculosis",
        type: "YN"
      },
      {
        question: "Surveyor, do you observe signs or symptoms of a serious health condition?",
        type: "private_YN"
      },
      {
        question: "Have you ever had problematic drug or alcohol use, abused drugs or alcohol, or told you do?",
        type: "YN"
      },
      {
        question: "Have you consumed alcohol and/or drugs almost every day or every day for the past month?",
        type: "YN"
      },
      {
        question: "Have you ever used injection drugs or shots in the last six months?",
        type: "YN"
      },
      {
        question: "Have you ever been treated for drug or alcohol problems and returned to drinking or using drugs?",
        type: "YN"
      },
      {
        question: "Have you used non-beverage alcohol like cough syrup, mouthwash, rubbing alcohol, cooking wine, or anything like that in the past six months?",
        type: "YN"
      },
      {
        question: "Have you blacked out because of your alcohol or drug use in the past month?",
        type: "YN"
      },
      {
        question: "Surveyor, do you observe signs or symptoms or problematic alcohol or drug abuse?",
        type: "private_YN"
      },
      {
        question: "Ever been taken to a hospital against your will for a mental health reason?",
        type: "YN"
      },
      {
        question: "Ever gone to the emergency room because you weren’t feeling 100% well emotionally or because of your nerves?",
        type: "YN"
      },
      {
        question: "Ever spoken with a psychiatrist, psychologist or other mental health professional in the last six months because of your mental health – whether that was voluntary or because someone insisted that you do so?",
        type: "YN"
      },
      {
        question: "Ever had a serious brain injury or head trauma?",
        type: "YN"
      },
      {
        question: "Ever been told you have a learning disability or developmental disability?",
        type: "YN"
      },
      {
        question: "Do you have any problems concentrating and/or remembering things?",
        type: "YN"
      },
      {
        question: "Surveyor, do you detect signs or symptoms of severe, persistent mental illness or severely compromised cognitive functioning?",
        type: "private_YN"
      },
      {
        question: "Have you had any medicines prescribed to you by a doctor that you do not take, sell, had stolen, misplaced, or where the prescriptions were never filled?",
        type: "YN"
      },
      {
        question: "Have you experienced any emotional, physical, psychological, sexual or other type of abuse or trauma in your life which you have not sought help for, and/or which has caused your homelessness?",
        type: "YN"
      }
    ];


  }


  render() {
    return (
      <div>
        <QuestionList componentClass="QuestionItem">
          {
            this.question_list.map((val) => {
              return <QuestionItem data={val}/>;
            })
          }
        </QuestionList>
      </div>
    );
  }
}
