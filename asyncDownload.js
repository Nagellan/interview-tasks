/*
Task: emulate downloading resources with bounded throughput
 */

const getFetchTime = () => 3000 + Math.random() * 7000;

const fetchEmulation = returnedValue => () => new Promise(resolve =>
    setTimeout(() => resolve(returnedValue), getFetchTime()));

const downloadAll = async (queue, workers) => {
    const startTime = Date.now();
    const downloaded = [];
    await Promise.all(workers.map(async (worker, index) => {
        while (queue.length !== 0) {
            const dataFromUrl = await queue.pop()();
            downloaded.push(dataFromUrl);
            console.log(Date.now() - startTime, dataFromUrl, `from ${worker} ${index + 1}`);
        }
    }));
    return downloaded;
};

const emulation = async (urls, workers) => {
    const fetches = urls.map((value, index) => fetchEmulation(value + (index + 1)));
    const data = await downloadAll(fetches, workers);
    console.log(`Expected data length: ${urls.length}, actual: ${data.length}`);
};

const numberOfUrls = 20;
const throughput = 5;
const urls = Array(numberOfUrls).fill('url_');
const workers = Array(throughput).fill('worker');
emulation(urls, workers).then();

/*
Output:
3568 'url_18' 'from worker 3'
4171 'url_19' 'from worker 2'
5264 'url_20' 'from worker 1'
6551 'url_16' 'from worker 5'
8210 'url_17' 'from worker 4'
12062 'url_14' 'from worker 2'
13061 'url_12' 'from worker 5'
13314 'url_15' 'from worker 3'
14313 'url_11' 'from worker 4'
14983 'url_13' 'from worker 1'
15611 'url_10' 'from worker 2'
18306 'url_9' 'from worker 5'
19399 'url_8' 'from worker 3'
21479 'url_7' 'from worker 4'
23226 'url_6' 'from worker 1'
24898 'url_5' 'from worker 2'
25072 'url_2' 'from worker 4'
25726 'url_3' 'from worker 3'
28106 'url_4' 'from worker 5'
29368 'url_1' 'from worker 1'
Expected data length: 20, actual: 20
 */