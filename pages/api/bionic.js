// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");

export default function handler(req, res) {
    if (req.method === "GET") {
        const encodedParams = new URLSearchParams();
        encodedParams.append(
            "content",
            "Hello friends from Facebook! Here I am typing out a bunch of verbose text so I can test out their API and just to see what this looks like on some sample text. I think I'll really enjoy integrating this into some of my other projects so that I can have better accessibility for this. Dang, I sure feel like a kid again, trying to fill up a word count for some kind of essay or research paper I'm writing. I think I'll have some pizza for dinner. Bottom text"
        );
        encodedParams.append("response_type", "html");
        encodedParams.append("request_type", "html");
        encodedParams.append("fixation", "1");
        encodedParams.append("saccade", "10");

        const API_KEY = process.env.RapidAPIKey;

        console.log({ API_KEY });

        const options = {
            method: "POST",
            url: "https://bionic-reading1.p.rapidapi.com/convert",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
                "X-RapidAPI-Key": API_KEY
            },
            data: encodedParams
        };

        axios
            .request(options)
            .then(function ({ data }) {
                console.log(data);
                res.status(200).json({ text: data });
                return;
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).json({ error });
                return;
            });
    }

    if (req.method === "POST") {
        const { inputText } = req.body;

        const encodedParams = new URLSearchParams();
        encodedParams.append("content", inputText);
        encodedParams.append("response_type", "html");
        encodedParams.append("request_type", "html");
        encodedParams.append("fixation", "1");
        encodedParams.append("saccade", "10");

        const API_KEY = process.env.RapidAPIKey;

        console.log({ API_KEY });

        const options = {
            method: "POST",
            url: "https://bionic-reading1.p.rapidapi.com/convert",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
                "X-RapidAPI-Key": API_KEY
            },
            data: encodedParams
        };

        axios
            .request(options)
            .then(function ({ data }) {
                console.log(data);
                res.status(200).json({ text: data });
                return;
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).json({ error });
                return;
            });
    }
}
