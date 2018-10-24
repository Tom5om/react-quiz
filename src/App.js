import React, {Component} from 'react';
import logo from './logo.svg';
import quizQuestions from './api/quizQuestions';

import './App.css';
import Result from "./components/Result";
import Quiz from "./components/Quiz";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            image: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                amazing: 0,
                ok: 0,
                terrible: 0
            },
            result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }



    componentWillMount() {
        const AnswerOptions = quizQuestions.map((question) => question.answers);

        this.setState({
            question: quizQuestions[0].question,
            image: quizQuestions[0].image,
            answerOptions: AnswerOptions[0]
        });
    }


    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    getResults() {
        debugger;
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    setUserAnswer(answer) {
        console.log(answer);

        this.setState((state) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: state.answersCount[answer] + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            image: quizQuestions[counter].image,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    setResults (result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                image={this.state.image}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }


    renderResult() {
        return (
            <Result quizResult={this.state.result} />
        );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="/images/cassie_wink.gif" className="App-logo" alt="logo" />
                    <h2>Happy birthday Trivia</h2>
                </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    }
}

export default App;
