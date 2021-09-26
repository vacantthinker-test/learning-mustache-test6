/**
 * 根据提供的tokens和data, 组合成字符串, 然后返回该字符串.
 * @param tokens 一个数组. 每一项又是一个数组. 子数组中 第一项: text, name, #
 * @param data
 * @returns {string}
 */
import lookup from "./lookup";
import renderTemplateArray from "./renderTemplateArray";

export default function renderTemplate(tokens, data) {
    let result = '';

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        let type = token[0]
        let value = token[1];

        switch (type) {
            case 'text':
                result += value
                break
            case 'name':
                result += lookup(data, value)
                break
            case '#':
                // 当前第一次传递为 ['#', 'arr', Array()]
                result += renderTemplateArray(token, data)
                break
        }
    }
    console.log(result)
    return result
}












