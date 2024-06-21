import { RootState } from '@/app/_redux/rootReducer'
import { setFontFamaly } from '@/app/_redux/slice/theme'
import { useSelector } from '@/app/_redux/store'
import { fontFamily } from '@/app/_theme/fontfamily'
import { Select, FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

function SelectBox() {
    const { themeFontFamily } = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch()
    const handleChange = (e:SelectChangeEvent<string>) =>{
       dispatch(setFontFamaly(e.target.value))   
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="font_famaly">Fontfamily</InputLabel>
            <Select labelId='font_famaly'
                value={themeFontFamily}
                label="Fontfamily"
                onChange={handleChange}
                >
                    {
                        fontFamily.map((family, index)=>{
                          return (
                              <MenuItem key={index} value={family.fontfamily.style.fontFamily}>{family.name}</MenuItem>
                          )
                        })
                    }
            </Select>
        </FormControl>
    )
}

export default SelectBox