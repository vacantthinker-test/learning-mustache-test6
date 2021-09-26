import Scanner from "./Scanner";
import nestedTokens from "./nestedTokens";

let template = `
            <ul>
                {{#arr}}
                <li>
                    <p>{{name}}</p>
                    <ul>
                        {{#loves}}
                        <li>{{.}}</li>
                        {{/loves}}
                    </ul>
                </li>
                {{/arr}}
            </ul>
        `
export default function parseTemplate(template){
    let tokens = []
    let scanner = new Scanner(template)

    let startTag = '{{'
    let endTag = '}}'
    while (!scanner.eos()){
        // startTag
        let text = scanner.scanUntil(startTag)
        if (text !== '') {
            tokens.push(['text', text])
        }
        scanner.scan(startTag)
        // endTag
        let name = scanner.scanUntil(endTag)
        if (name !== '') {
            let type = name[0]
            let value = name.substring(1)
            switch (type){
                case '#':
                    tokens.push(['#', value])
                    break
                case '/':
                    tokens.push(['/', value])
                    break
                default:
                    tokens.push(['name', name])
                    break
            }
        }
        scanner.scan(endTag)

    }
    console.log(tokens)
    return nestedTokens(tokens)
}















