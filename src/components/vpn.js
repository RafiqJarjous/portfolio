import React from 'react'
import vpn from './assest/vpn.png'
import vpn2 from './assest/vpn2.png'
import vpn3 from './assest/vpn3.png'


export default function VPN() {
    return (
        <div>
            <div>
                <img src={vpn} alt='vpn' />
                <p>VPN?</p>
            </div>
            <div>
                <img src={vpn2} alt='vpn' />
                <p>VPN?</p>
            </div>
            <div>
                <img src={vpn3} alt='vpn' />
                <p>VPN?</p>
            </div>
            
        </div>
    )
}
