import React from 'react'
import { connect } from 'react-redux'
import PlacesAutocomplete from 'react-places-autocomplete'
import { addCity } from '../actions/'
import { InputBox, AutocompleteWrap, AutocompleteItems, AutocompleteItemsContainner } from '../components/layout'

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '' 
        }
    }

    handleChange = city => {
        this.setState({ 
            city,
        })
    };

    handleSelect = city => {
        this.props.addCity(city)
    };

    render() {
        const renderSuggestionList = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
            <AutocompleteWrap className="autocomplete-root">
                <InputBox {...getInputProps()} />
                <AutocompleteItemsContainner>
                    {suggestions.map(suggestion => (
                        <AutocompleteItems {...getSuggestionItemProps(suggestion)}>
                            <span>{suggestion.description}</span>
                        </AutocompleteItems>
                    ))}
                </AutocompleteItemsContainner>
            </AutocompleteWrap>
        )
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.city}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}>
                    {renderSuggestionList}
                </PlacesAutocomplete>
            </div>
        )
    }
}
const mapDispatchToProps = { addCity }

export default connect(null, mapDispatchToProps)(LocationSearchInput)