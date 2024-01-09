import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row , Col, Button, Stack} from 'react-bootstrap';

import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGES } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {

  const {fromLanguage, toLanguage, fronText, result, loading,  interchangeLanguages , setToLanguage , setFromLanguage, setFromText, setResult} = useStore()

  return (
    <Container fluid style={{textAlign:'center'}}>

      <h1>Google Translate</h1>

      <Row>

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}/>
            <TextArea
            type={SectionType.From}
            value={fronText}
            onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} />
            <TextArea
              type={SectionType.To}
              value={result}
              loading= {loading}
              onChange={setResult}
            />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
