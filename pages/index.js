import Head from "next/head";
import { useLocalStorage } from 'primereact/hooks';
import Header from "../src/components/Header";
import {Image} from "react-bootstrap";
import IntroBlock from "../src/components/IntroBlock";

const Index = () => {
    const [theme, setTheme] = useLocalStorage('dark', 'theme');
    return (
        <div>
            <Head>
                <link rel="icon" type={'png/img'} href={'/logo_white.png'}/>
                <title>amanbayew \ обо мне</title>
            </Head>

            <Header/>

            <br/> <br/> <br/>
            <IntroBlock/>

            <style jsx global>
                {`
                  body {
                    background-color: ${theme == 'dark' ? '#202023' : '#f0e7db'};
                    transition: 0.3s ease;
                  }
                  body > * {
                    color: ${theme == 'dark' ? 'white' : 'black'} !important;
                  }
                `}
            </style>
        </div>
    )
}

export default Index;