// components/Modal.tsx

import React from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

export const ToolsModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};
