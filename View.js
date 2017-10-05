import React from 'react';
import {
	View as RNView,
} from 'react-native';


class View extends React.Component {

	getPadding() {
		let { p, pl, pr, pt, pb, smp, mdp, lgp, xlp,
			smpl, smpr, smpt, smpb, mdpl, mdpr, mdpt, mdpb, lgpl, lgpr, lgpt, lgpb,
			xlpr, xlpl, xlpt, xlpb } = this.props
		const sm = 5
		smp = smp ? sm : null
		smpl = smpl ? sm : null
		smpr = smpr ? sm : null
		smpb = smpb ? sm : null
		smpt = smpt ? sm : null
		const md = 15
		mdp = mdp ? md : null
		mdpl = mdpl ? md : null
		mdpr = mdpr ? md : null
		mdpb = mdpb ? md : null
		mdpt = mdpt ? md : null
		const lg = 30
		lgp = lgp ? lg : null
		lgpl = lgpl ? lg : null
		lgpr = lgpr ? lg : null
		lgpb = lgpb ? lg : null
		lgpt = lgpt ? lg : null
		const xl = 45
		xlp = xlp ? xl : null
		xlpl = xlpl ? xl : null
		xlpr = xlpr ? xl : null
		xlpb = xlpb ? xl : null
		xlpt = xlpt ? xl : null
		const padding = smp || mdp || lgp || xlp || p
		return {
			padding,
			paddingTop: pt || smpt || mdpt || lgpt || xlpt || padding,
			paddingBottom: pb || smpb || mdpb || lgpb || xlpb || padding,
			paddingLeft: pl || smpl || mdpl || lgpl || xlpl || padding,
			paddingRight: pr || smpr || mdpr || lgpr || xlpr || padding
		}
	}

	getItemsAlignment() {
		const { row, vstart, vcenter, hcenter, vend, hstart, stretch, hend, spread, push, flex } = this.props
		let style = { flexDirection: row ? 'row' : "column" }

		if (flex) {
			style['flex'] = 1
		}

		const vprop = row ? 'alignItems' : "justifyContent"
		if (vcenter) {
			style[vprop] = "center"
		}
		if (vstart) {
			style[vprop] = "flex-start"
		}
		if (vend) {
			style[vprop] = "flex-end"
		}

		const hprop = row ? "justifyContent" : 'alignItems'
		if (hcenter) {
			style[hprop] = "center"
		}
		if (hstart) {
			style[hprop] = "flex-start"
		}
		if (hend) {
			style[hprop] = "flex-end"
		}
		if (spread) {
			style['justifyContent'] = "space-around"
		}
		if (push) {
			style['justifyContent'] = "space-between"
		}
		if (stretch) {
			style['alignItems'] = "stretch"
		}
		return style
	}

	getDimensions() {
		const { w, h } = this.props
		let style = {}

		if (w) {
			style['width'] = w
		}
		if (h) {
			style['height'] = h
		}
		return style
	}

	getBorderStyle() {
		const { border } = this.props
		let style = {}
		if (border) {
			var borderColor = border.color || "#000"
			style = {
				borderColor,
				borderWidth: border.width,
				borderTopWidth: border.top || border.width,
				borderBottomWidth: border.bottom || border.width,
				borderLeftWidth: border.left || border.width,
				borderRightWidth: border.right || border.width
			}
		}
		return style
	}

	render() {
		const { bg } = this.props
		return (
			<RNView {...this.props} style={[{
				backgroundColor: bg,
				...this.getBorderStyle(),
				...this.getItemsAlignment(),
				...this.getPadding(),
				...this.getDimensions(),
			}, this.props.style]}>
				{this.props.children}
			</RNView>
		);
	}
};

export default View