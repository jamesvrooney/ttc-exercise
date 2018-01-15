const axios = require('axios');

const GITHUB_REPOSITORIES_API = 'https://api.github.com/search/repositories?q=language:';

exports.repositories_get_all = (req, res, next) => {
    const language = req.query.q;

    axios.get(GITHUB_REPOSITORIES_API + language)
        .then(function (response) {
            var repositories = response.data.items;
            var result = [];

            for (var i = 0; i < repositories.length; i++) {
                var data = {};

                data.project_id = repositories[i].id;
                data.name = repositories[i].name;
                data.url = repositories[i].html_url;
                data.owner_login = repositories[i].owner.login;

                result.push(data);
            }
        
            res.status(200).json(result);
        })
        .catch(function (error) {
            console.log(error);
        });
}