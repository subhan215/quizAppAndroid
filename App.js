import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import SelectList from 'react-native-dropdown-select-list'
import Timer from "./Timer";

export default function App() {
  const questions = [
    {
      num: 1,
      question: "What does html stands for",
      Option: [
        "Hyper text markup link",
        "Hyper turn markup language",
        "Hyper text mongo link",
        "Hyper text markup language",
      ],
      answer: "Hyper text markup language"
    },
    {
      num: 2,
      question: "What is the class name of bootstrap we used in a button ",
      Option: [
        "btn button",
        "btn",
        "button btn",
        "button",
      ],
      answer: "btn"
    },
    {
      num: 3,
      question: "The correct sequence of HTML tags for starting a webpage is",
      Option: [
        "Head, Title, HTML, body",
        "HTML, Body, Title, Head",
        "HTML, Head, Title, Body",
        "HTML, Head, Title, Body",
      ],
      answer: "HTML, Head, Title, Body"
    },
    {
      num: 4,
      question: "Which of the following element is responsible for making the text bold in HTML",
      Option: [
        "pre",
        "b",
        "a",
        "br",
      ],
      answer: "b"
    },
    {
      num: 5,
      question: "Which of the following tag is used for inserting the largest heading in HTML",
      Option: [
        "h1",
        "h0",
        "h5",
        "h6"
      ],
      answer: "h1"
    },
    {
      num: 6,
      question: "Which of the following tag is used to insert a line-break in HTML",
      Option: [
        "b",
        "a",
        "pr",
        "br"
      ],
      answer: "br"
    }, {
      num: 7,
      question: "Which is the 2nd highest paid programming language in the world",
      Option: [
        "Python",
        "C++",
        "Javascript",
        "C Sharp",
      ],
      answer: "Javascript"
    }
  ];
  const [showDisplay, setShowDisplay] = useState(false)
  const [userName, setUserName] = useState("")
  const [currentQues, setCurrentQues] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

  const startQuiz = () => {
    if (userName.length >= 3) {
      setShowDisplay(true)
    }
    else {
      alert("Please write correct name")
    }
  }

  function checkAns(answerOption) {

    if (answerOption === questions[currentQues].answer) {
      setTotalScore(totalScore + 1);
    }

    const nextQues = currentQues + 1;
    if (nextQues < questions.length) {
      setCurrentQues(nextQues);
    } else {
      setShowScore(true);
    }
  }
  const [selected, setSelected] = React.useState("");

  const data = [{ key: '1', value: 'Web and Mobile Dev.' }];
  return (
    <View style={styles.container}>
      {!showDisplay ?
        <View style={styles.form}>
          <Text style={styles.formh1}>Fill the Form</Text>
          <TextInput placeholder='Enter your name' value={userName} onChangeText={(val) => setUserName(val)} style={styles.userinp} placeholderTextColor="#0094DA" />
          <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
          <Text onPress={() => startQuiz()} style={styles.formbtn}>Start Quiz</Text>
        </View> :
        showScore ? (
          <>
            <View style={styles.resultView}>
              <Text onPress={handleShow} style={styles.mybtn}>
                Show Results
              </Text>

            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modal}>
                <View style = {styles.modalHeader}>                
                  <Text style={styles.modalTitle}>Congratulations!</Text>
                  <Text onPress={handleClose}><FontAwesomeIcon icon={faX} /></Text>
                  
                </View>


                <Text style={styles.modalBody}>You have scored <Text style={styles.totalScore}>{totalScore}</Text> out of <Text style={styles.totalQues}>{questions.length}</Text></Text>
              </View>
            </Modal>
          </>
        ) :
          (
            <View style={styles.maindivparent}>
              <View style={styles.maindiv}>
                <View style={styles.quesdiv}>
                  <View style={styles.quesdivp1}>
                    <Text style={styles.userNameText}>{userName}</Text>
                    <Text style={styles.questionText}>Question {currentQues + 1} out of {questions.length}</Text>
                    <Timer />
                  </View>
                  <Text style={styles.quespara}>{questions[currentQues].question}</Text>
                </View>
                <View style={styles.options}>
                  <View style={styles.optdiv1}>
                    {questions[currentQues].Option.map((answerOption, ind) => {
                      return <Text onPress={() => checkAns(answerOption)} key={ind} style={styles.optionText} >{answerOption}</Text>
                    })}
                  </View>
                </View>
              </View>
            </View>
          )
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkkhaki"
  },
  form: {
    display: "flex",
    width: "100%",
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  formh1: {
    fontFamily: "cambria",
    fontSize: 37,
    color: "black"
  },
  userinp: {
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "cursive",
    backgroundColor: "transparent",
    border: "none",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    color: "#0094DA",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  formbtn: {
    backgroundColor: "transparent",
    marginTop: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0094DA",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    fontFamily: "cambria",
    fontSize: 18,
    color: "black"
  },
  maindivparent: {
    width: "100%"
  },
  maindiv: {
    height: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
  },
  quesdiv: {
    backgroundColor: "#0094DA",
    width: "100%",
    paddingTop: 25,
    display: "flex",
    alignItems: "center",
  },
  quesdivp1: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20

  },
  userNameText: {

    marginRight: 10,
    marginBottom: 16,
    marginLeft: 10,
    fontWeight: "bold",
    backgroundColor: "darkkhaki",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 10,
    fontFamily: "cambria",
    fontSize: 20
  },
  questionText: {
    backgroundColor: "aliceblue",
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
    color: "black",
    fontFamily: "cursive",
    fontSize: 20
  },
  quespara: {
    marginTop: 0,
    color: "aliceblue",
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 10,
    fontFamily: "cambria"
  },
  options: {
    marginTop: 50,
    width: "100%",
  },
  optionText: {
    width: "100%",
    marginTop: 25,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0094DA",

    padding: 10,
    marginLeft: 0,
    borderRadius: 8,
    fontFamily: "cursive",
    fontSize: 25,
    backgroundColor: "white",
    textAlign: "center",
    color: "black",
    fontWeight: "bold"

  },
  resultView: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  mybtn: {
    color: "#0094DA",
    backgroundColor: "aliceblue",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0094DA",
    fontFamily: "cambria",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5

  },
  modal: {
    backgroundColor: "white",
    padding: 10
  },
  modalHeader : {
    borderBottomWidth: 1,
    borderBottomColor: "#0094DA",
    borderBottomStyle: "solid" , 
    marginBottom: 10,
    width: "100%",
    display : "flex" , 
    flexDirection : "row" , 
    alignItems : "center" , 
    justifyContent : "space-between" , 
    paddingBottom : 5
  } , 
  modalTitle: {
    fontFamily: "georgia",
   
   
    fontSize: 25,
    color : "black"
   
  },
  modalBody: {
    fontFamily: "cursive",
    fontSize: 20,
    color: "black",
    marginBottom: 10
  },
  totalQues: {
    fontWeight: "bold"
  },
  totalScore: {
    color: "#0094DA",
    fontWeight: "bold"
  }


})