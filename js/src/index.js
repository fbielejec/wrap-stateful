require('./style/index.css');
var d3 = require('d3');

var Module = (function Module() {

  var _privateVars = {
    'data': null
  };

  // Return the constructor
  return function Module() {

    var _this = this;

    _this.setData = function (data) {
      _privateVars.data = data;
      return _this;
    };

    _this.render = function () {

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      var margin = {top: 20, right: 80, bottom: 30, left: 50};
      var width = 960 - margin.left - margin.right;
      var height = 500 - margin.top - margin.bottom;

      var svg = d3.select('body').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      var color = d3.scaleOrdinal(d3.schemeCategory20);

      var simulation = d3.forceSimulation()
          .force('link', d3.forceLink().id(function (d) { return d.id; }))
          .force('charge', d3.forceManyBody())
          .force('center', d3.forceCenter(width / 2, height / 2));

      d3.json(_privateVars.data, function (error, data) {
        if (error) throw error;

        var link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(data.links)
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.value); });

        var node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(data.nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', function (d) { return color(d.group); })
            .call(d3.drag()
                  .on('start', dragstarted)
                  .on('drag', dragged)
                  .on('end', dragended));

        node.append('title')
          .text(function (d) { return d.id; });

        simulation
          .nodes(data.nodes)
          .on('tick', ticked);

        simulation.force('link')
          .links(data.links);

        function ticked() {
          link
            .attr('x1', function (d) { return d.source.x; })
            .attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; })
            .attr('y2', function (d) { return d.target.y; });

          node
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
        }

        console.log(data);

      });

    };

  };
}());

module.exports = {
  Module: Module
};

