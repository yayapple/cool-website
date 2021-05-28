(function() {
  var settings = {
    rainbowLength: 256,
    rainbowMultiplier: 2,
    rainbowClass: 'rainbow-text',
    repeat: true,
    numberAches: {
      topWeeoo: function(tI, k){
        return Math.sin((tI/3 + k) / 2) * 5 + 'px';
      }
    }
  };

  var Δ = {
    rainbow: makeMeARainbow(settings.rainbowLength),
    init: function() {
      var sourceElement = document.querySelector('.' + settings.rainbowClass);

      this.element = this.dissectText(sourceElement);
      sourceElement.parentNode.insertBefore(this.element, sourceElement);
      sourceElement.remove();
      this.update(this.draw(this.element));

      return this;
    },
    draw: function(el) {
      if (!el) return;
      var _self = this;

      var spans = el.querySelectorAll('span');
      [].forEach.call(spans, function(v, k) {
        v.style.color = _self.rainbow[k % _self.rainbow.length];
        v.style.position = 'relative';
      });

      return spans;
    },
    dissectText: function(sourceEl) {
      var textSource = sourceEl.textContent,
        headingContainer = document.createElement('h1');

      textSource.split('').forEach(function(v, k, c) {
        var span = document.createElement('span'),
          destText = document.createTextNode(v);

        span.appendChild(destText);
        headingContainer.appendChild(span);
      });

      headingContainer.className = settings.rainbowClass;

      return headingContainer;
    },
    update: function(spans) {
      if (!spans) return;
      var _self = this,
        delay = settings.delay,
        nanana = settings.numberAches,
        tI = _self.totalIterations = 0;
      requestAnimationFrame(animateText.bind(_self, spans, tI));

      function animateText(spans, tI) {
        [].forEach.call(spans, function(v, k) {
          v.style.color = _self.rainbow[(tI + k) % _self.rainbow.length];
          v.style.top = nanana.topWeeoo(tI, k); //Math.sin((tI + k) / 6) * 20 + 'px';
        });

        if (settings.repeat) requestAnimationFrame(animateText.bind(_self, spans, ++tI));
      };

      return _self;
      //return _self.updater;
    }
  }.init();

  function makeMeARainbow(length) {
    var length = length || 64;

    return (function generateRainbow(arr, amount) {
      if (--amount < 0) return arr;
      arr.push(generateColor(((length - amount+1) % length), length, settings.rainbowMultiplier));
      return generateRainbow(arr, amount);
    })([], length);

    function generateColor(amount, total, multiplier) {
      return 'hsla\(' + ((amount * multiplier) * (360 / total)) + ',100%,60%,0.90\)'
    }
  }

})();
