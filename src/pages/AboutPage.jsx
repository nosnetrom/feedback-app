import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <dl>
          <dt>About This Project</dt>
          <dd>This is a React app to leave feedback for a product or service.</dd>
          <dt>Version</dt>
          <dd>1.0.0.1</dd>
          <dt>Forked From</dt>
          <dd>
            <a href="https://github.com/bradtraversy/feedback-app">@bradtraversy</a>
          </dd>
          <dt>Date</dt>
          <dd> 03 Jan 2022</dd>
        </dl>
     </div>
    </Card>
  )
}

export default AboutPage
