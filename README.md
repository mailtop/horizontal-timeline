# horizontal-timeline
A React component to create horizontal timelines

![](https://i.imgur.com/XawnTGY.jpg)

![](https://i.imgur.com/2a5VbpG.jpg)

**Attention**: *this dependency requires* [Material-UI](https://material-ui.com/)

## Installation

```
npm install --save @mailtop/horizontal-timeline
```
or
```
yarn add @mailtop/horizontal-timeline
```

## Usage
The following snippet generates the timeline you see in the first screenshot - [`react-icons`](https://react-icons.netlify.com/#/) required

To make it like the second screenshot, add the property `simple` to the `Timeline` component

```jsx
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'

<Timeline minEvents={5} placeholder>
  <TimelineEvent
    icon={FaRegFileAlt}
    title='Em rascunho'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#87a2c7'
    icon={FaRegCalendarCheck}
    title='Agendado'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#9c2919'
    icon={FaBug}
    title='Erro'
    subtitle='26/03/2019 09:51'
    action={{
      label: 'Ver detalhes...',
      onClick: () => window.alert('Erro!')
    }}
  />
</Timeline>
```

## API
### Timeline
Renders a `div` with the same width as the parent element and creates a horizontal scrollbar according to the number of events

**Props:**  
**# height:** set the size of the component. Default value: `265px`  
**# simple:** if `true`, renders only the icon of the events, as in the second screenshot above. The event `title` and `subtitle` are shown on a tooltip and the `action`, if set, is fired when you click the circle  
**# minEvents:** used to render placeholders for events, if `placeholder` is set to `true`, as shown in the screenshots above  
**# maxEvents:** limit the number of events showed on screen  
**# placeholder:** create the placholders when `minEvents` is set too  

### TimelineEvent
Renders events inside the `Timeline` wrapper. Any number of these can be created*

**Props**  
**# color:** set the color of the event. Default value: `#e0e0e0`  
**# icon:** renders the icon that identifies the event  
**# title:** renders the main text below of the event  
**# subtitle:** renders the secondary text below the event  
**# action:** an `Object` with two properties:  
&nbsp;&nbsp;&nbsp;*-label:* the text inside the button showed below the event  
&nbsp;&nbsp;&nbsp;*-onClick:* the action fired when the user click the button or the event, if `simple` is set to `true` in the `Timeline` component  

**\*** *if* `maxEvents` *is set on the* `Timeline` *component, the number of events showed on screen will be limited to that ammount*


## Development
1. Clone the repository
```
git clone git@github.com:mailtop/horizontal-timeline.git
```
2. Run `yarn start`
3. Access `http://localhost:3001`*

**\*** the example page is located in `/examples/src/App.js`
