import React, { useState } from "react";
import { PropertyData } from '../../Array';
import { SelectStyled } from "./style"

function SelectBox() {
    const [isChecked, setIsChecked] = useState(true);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <SelectStyled>


            <div className='Properties-Text'>
                <p className="properties-title">What Properties We Buy</p>
                <p className="properties-subtitle">We provide an alternative to homeowners</p>
            </div>
            <div className="Box-Gapping">
                {PropertyData.map((item, index) => (

                    <div className="Select-Box" key={index}>
                        <div className="Properties-Container">


                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text"> {item.name}</span>
                            </div>
                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.title}</span>
                            </div>
                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.desc}</span>
                            </div>

                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.ugly}</span>
                            </div>
                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.issue}</span>
                            </div>
                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.ho}</span>
                            </div>
                            <div className="Text-Straight">
                                <div className="checkbox-wrapper" onClick={toggleCheckbox}>
                                    <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
                                        {isChecked && <span className="checkmark">✓</span>}
                                    </div>
                                </div>
                                <span className="Text">{item.li}</span>
                            </div>
                        </div>

                    </div>


                ))}</div>

        </SelectStyled>
    );
};

export default SelectBox;
