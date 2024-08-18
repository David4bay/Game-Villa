
export function getCurrentPageAndPageSize(url) {
    const webpage = url
    const currentPage = webpage.split("=").slice(2)[0].split("&")[0]
    const pageSize = webpage.split("=").slice(2)[1]
    return {
        currentPage, pageSize
    }
}