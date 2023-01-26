export const setStorage = (key, value, local = true) => (local ? localStorage : sessionStorage).setItem(key, JSON.stringify(value))

export const removeStorage = (key, local = true) => (local ? localStorage : sessionStorage).removeItem(key)

export const getStorage = (key, fallbackValue, local = true) => {
    let value = (local ? localStorage : sessionStorage).getItem(key)
    try {
        value = JSON.parse(value)
    } catch {
        if (fallbackValue) {
            value = fallbackValue
            setStorage(key, value, local)
        } else {
            value = null
            removeStorage(key, local)
        }
    }
    return value
}