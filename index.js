// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, Linking} from 'react-native'

const ExternalLink = ({wrapper, url, style, onPress}) => {

  const Wrapper = wrapper

  const _handlePress = () => {
    onPress()
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log(`Don\'t know how to open URI: ${url}`)
      }
    })
  }

  return (
    <Wrapper style={style} onPress={_handlePress}>
      {children}
    </Wrapper>
  )
}

ExternalLink.propTypes = {
  wrapper: PropTypes.any,
  url: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func
}

ExternalLink.defaultProps = {
  wrapper: TouchableOpacity,
  url: '',
  style: {},
  onPress: () => {}
}

export default ExternalLink
