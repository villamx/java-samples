/*
 * PopoverView.js 09/09/(c) 2014.
 * 
 * Backbone > PopoverView.
 */
define([ 'backbone' ], function(Backbone) {

	console.log('backbone > PopoverView', arguments);

	var whitelist =
	[ 'html', 'title', 'placement', 'trigger', 'content', 'viewport', 'chain' ];

	var PopoverView =
	Backbone.View.extend({
		/*
		 * @param { html, title, placement, trigger, chain [template, content,
		 * viewport] }
		 */
		initialize : function(options) {
			console.log('backbone > PopoverView_initialize', arguments, this);

			var config = _.pick(options, whitelist);

			console.log('backbone> PopoverView_initialize config', config);

			if (config['chain'] !== true) config['chain'] = false;
			if (config['trigger'] !== 'click' || config['chain']) {
				// this.events['show.bs.popover'] = 'onShow';
				this.events['shown.bs.popover'] = 'onShown';
				// this.events['hide.bs.popover'] = 'onHide';
				// this.events['hidden.bs.popover'] = 'onHidden';
			}

			this.$el.popover(config);
			this._config = config;
		},

		events : {
		/* 'shown.bs.popover' : 'onShown' */
		},

		onShow : function(ev) {
			console.log('backbone> PopoverView_ onShow', arguments, this._cache,
			this.$el.next('.popover'));
		},

		onShown : function(ev) {
			console.log('backbone> PopoverView_ onShown', arguments, this._cache,
			this.$el.next('.popover'));

			// 
			if (this._cache && this._config['content']) {
				this.content(this._config['content']);
			}

			if (!this._cache) {
				console.log(' > PopoverView::onShown ', this._config['trigger']);

				this._cache = this.$el.next('.popover');
				// this._cache.find('.popover-title').addClass('text-center');
			}

			if (this._config['chain']) this.trigger('online', this._cache);
		},

		onHide : function(ev) {
			console.log('backbone> PopoverView_ onHide', arguments, this._cache);
		},

		onHidden : function(ev) {
			console.log('backbone> PopoverView_ onHidden', arguments, this._cache);
		},

		onResize : function(sizes) {
			console.log('backbone> PopoverView::onResize', arguments);

			if (!(sizes && this._cache)) return;

			var popContent, styles, height, current;

			popContent = this._cache.find('.popover-content');
			current = {
				left : parseInt(this._cache.css('left')),
				width : this._cache.width()
			};

			styles = _.pick(sizes, 'width');
			styles['max-width'] = sizes.width;
			styles['left'] = (current.left * sizes.width) / current.width;
			height = sizes.height - popContent.offset().top;

			console.log('backbone> PopoverView:: sizes ', styles, ' ', height);

			this._cache.css(styles);
			popContent.css({
				height : height
			});
		},

		onClose : function(ev) {
			console.log('backbone> PopoverView::onClose', arguments);

			if (this._cache) this._cache = null;
			this.$el.popover('destroy');
		},

		show : function() {
			console.log('backbone> PopoverView::show', arguments);

			this.$el.popover('show');
		},

		hide : function() {
			console.log('backbone> PopoverView::hide', arguments);

			if (this._cache) {
				var content = this._cache.find('.popover-content');
				if (this._config['chain']) content.children().remove();
				else content.empty();
			}

			this.$el.popover('hide');
		},

		content : function(data) {
			console.log('backbone> PopoverView::content', arguments);

			if (data) {
				this._cache.find('.popover-content').html(data);
			}
		}

	});

	return PopoverView;
});
