import { withKnobs, text, color } from '@storybook/addon-knobs';
import { attributesGroupId, cssVariablesGroupId } from '../../shared/groups';
import mdx from './zoo-toggle-switch.mdx';
import { html } from 'lit-html';
import ToggleSwitch from '@zooplus/zoo-web-components';

export default {
	title: 'Docs/Toggle Switch',
	component: 'zoo-toggle-switch',
	decorators: [withKnobs],
	parameters: {
		docs: {
			page: mdx,
		},
	}
};

export const zooQuantityControl = () => {
	let infotext = text('infotext', 'Additional information', attributesGroupId);
	let primaryMid = color('--primary-mid', '#3C9700', cssVariablesGroupId);
	return html`
	<zoo-toggle-switch infotext="${infotext}" style="--primary-mid: ${primaryMid};">
		<label for="input-toggle" slot="label">Toggle switch</label>
		<input id="input-toggle" slot="input" type="checkbox"/>
	</zoo-toggle-switch>`;
};

