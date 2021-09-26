import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

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
let data = {
    arr: [
        {name: 'mr.Z', loves: ['work', 'food']},
        {name: 'mr.Li', loves: ['read', 'walk']},
        {name: 'mr.K', loves: ['game', 'run']},
    ]
}

/**
 * 模板一份, 数据三份. for循环三次, 需要模板, 和每次的数据.
 * @param token ['#', 'arr', Array]
 * @param data
 * @returns {string}
 */
export default function renderTemplateArray(token, data) {
    let result = ''
    let keyName = token[1]
    let scopeDataArray = lookup(data, keyName)
    for (let i = 0; i < scopeDataArray.length; i++) {
        let item = scopeDataArray[i]
        let wrappedScopeData = {
            ...item,
            '.': item
        }
        let scopeToken = token[2]
        result += renderTemplate(scopeToken, wrappedScopeData)
    }

    return result
}















