import { html, file, Routes } from '../libs/serve.ts';
import favicon from '../libs/favicon.ts';

const routes: Routes = new Map();

const homeHtml = `<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>Hello World</title>
    <style>
        body,
        h1,
        h2,
        a,
        a:hover,
        a:visited {
            color: #333;
        }
        main {
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 960px;
            padding: 20px;
        }
        footer > h2 {
            text-align: center;
        }
        a {
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        footer {
            margin-top: 44px;
        }
        @media screen and (min-height: 300px) {
            footer {
                margin-top: calc(100vh - 256px);
            }
        }
    </style>
</head>
<body>
    <main>
        <header>
            <h1>Welcome!</h1>
        </header>
        <div>
            <h2 style="color: #999">WIP:</h2>
        </div>
        <footer>
            <h2>Powered by <a target="_blank" href="https://deno.com/deploy">Deno Deploy</a></h2>
        </footer>
    </main>
</body>
</html>
`;

routes.set('/', () => html(homeHtml));
routes.set('/favicon.ico', () => file(favicon));

export default routes;
