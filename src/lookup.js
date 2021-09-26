let data = {
    arr: [
        {name: 'mr.Z', loves: ['work', 'food']},
        {name: 'mr.Li', loves: ['read', 'walk']},
        {name: 'mr.K', loves: ['game', 'run']},
    ]
}
/**
 * 查找值. 根据提供的key和data
 * 示例: 根据 arr 这个key, 在data这个对象中 找到它.
 * @param dataObject
 * @param keyName
 * @returns {*}
 */
export default function lookup(dataObject, keyName) {
    if (keyName !== '.' && keyName.indexOf('.') !== -1) {
        let tmp = dataObject
        let names = keyName.split('.')
        for (let i = 0; i < names.length; i++) {
            let item = names[i]
            tmp = tmp[item]
        }
        return tmp
    }

    return dataObject[keyName]
}