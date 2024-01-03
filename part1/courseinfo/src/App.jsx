const Header = ({course}) => {
  return(
    <>
      <h1>{course}</h1>

    </>
  )
}

const Part = (props) => {
  return(
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
    <Part part = {parts[0].part1} exercises = {parts[0].exercises1}/>
    <Part part = {parts[1].part2} exercises = {parts[1].exercises2}/>
    <Part part = {parts[2].part3} exercises = {parts[2].exercises3}/>

    </>
  )
}

const Total = ({nums}) => {
  return (
    <>
    <p>Number of exercises {nums[0].exercises1 + nums[1].exercises2 + nums[2].exercises3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {part1 : 'Fundamentals of React',
    exercises1 : 10},

    {part2 : 'Using props to pass data',
    exercises2 : 7},

    {part3 :'State of a component',
    exercises3 : 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total nums = {parts}/>
    </div>
  )
}

export default App
