<template>
    <div class="wrapper">
        <button
                class="btn clickable secondary-button"
                :class="small? 'small': medium?  'medium' : large? 'large': 'medium'"
                :style="{backgroundColor: color}"
                @click="$emit('onLeftButtonClick')">
            <slot name="left"></slot>
        </button>
        <button
                :disabled="disabled"
                class="btn clickable primary-button"
                :style="{backgroundColor: color}"
                :class="small? 'small': medium? 'medium' : large? 'large': 'medium'"
                @click="$emit('onRightButtonClick')">
            <slot name="right"></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "VPillButton",
        props: {
            color: {
                type: String,
                default: '#ddd',
                required: false,
            },
            disabled: {
                type: Boolean,
                default: false,
                required: false,
            },
            small: Boolean,
            medium: Boolean,
            large: Boolean,
        }
    }
</script>

<style scoped>

    .wrapper {
        white-space: nowrap;
        display: flex;
    }

    .btn {
        position: relative;
        overflow: hidden;
        border: none;
        text-align: center;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }

    .btn:disabled {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
        cursor: text;
    }

    .small {
        padding: 6px;
    }

    .medium {
        padding: 7px 10px;
    }

    .large {
        padding: 10px 30px;
    }

    .clickable::after {
        display: none;
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;

        /* Center the ripple */
        top: 50%;
        left: 50%;

        animation: ripple 1s;
        opacity: 0;
    }

    .clickable:focus:not(:active)::after {
        display: block;
    }

    .dismiss{
        background-color: #eeeeee;
        opacity: 0.5;
        padding: 4px 7px;
        border-radius: 30px;
        transform: scale(1);
        transition: all .3s;
    }

    .btn:focus {
        outline:none;
    }

    .btn::-moz-focus-inner {
        border:0;
    }

    .secondary-button{
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
    }

    .primary-button{
        border-bottom-right-radius: 16px;
        border-top-right-radius: 16px;
    }

    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(10);
        }
    }
</style>
