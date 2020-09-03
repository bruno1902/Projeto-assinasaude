var doencas = [
{
    ok: true,
    data: [{
        label: "Dor de cabeça",
        id: 1
    }, {
       label: "Dor nas costas",
       id: 2
   }]
}
]

module.exports = function (req, res) {
    res.writeHead(200,{
        'Content-Type' : 'text/json'
    });
    res.write(JSON.stringify(doencas));
    res.end();
}